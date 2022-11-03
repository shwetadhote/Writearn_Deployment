const { nanoid } = require('nanoid');
const moment = require("moment");
const { ErrorHelper, IPHelper: { getIp } } = require("./../helpers");
const {
    RazorPayPayout,
    RazorPayFundAccount
} = require("razorpayx-nodejs-sdk");
const { EarningModel, JobQueueModel, PayoutModel } = require("../models");

/**
 *
 * @param {*} param
 * @param {*} res
 */
const sendMoneyToCreator = async (req, res) => {
    try {
        const { body: { amount, payoutTo }, user } = req;
        // To check available balance should be greater than or equal to requested amount
        const availableBalance = await EarningModel.aggregate([
            {
                $match: {
                    userId: user._id,
                    status: {
                        $ne: "paid"
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    amount: {
                        $sum: {
                            '$cond': [
                                { '$eq': ['$status', 'partially paid'] },
                                { $subtract: ['$amount', '$paidAmount'] },
                                '$amount'
                            ]
                        },
                    },
                },
            },
        ])
        if (availableBalance < Number(amount)) {
            return res.status(400).json({
                message: "Invalid request! You can't transfer money greater than your available balance",
            });
        }
        const { isError, messages, data } = await RazorPayFundAccount.getAll({
            contact_id: user.razorPayContactId,
        });

        if (isError) {
            return res.status(400).json({
                message: messages[0],
            });
        }
        let accountData;
        if (data && data.items) {
            accountData = data.items.filter(element => element.id === payoutTo)[0]
        }
        if (!accountData) {
            return res.status(400).json({
                message: "No corresponding payout method added ",
            });
        }
        // For fetching all bonus unpaid earnings
        const bonusEarningsData = await EarningModel.find({
            userId: user._id,
            type: 'bonus',
            status: {
                $ne: "paid"
            }
        }).sort({
            amount: 1,
            paidAmount: 1
        });
        // To update earnings of post as a paid starting from minimum
        const postEarningsData = await EarningModel.find({
            userId: user._id,
            type: {
                $ne: "bonus"
            },
            status: {
                $ne: "paid"
            }
        }).sort({
            amount: 1,
            paidAmount: 1
        });
        let posts = [], earningsData = [...bonusEarningsData, ...postEarningsData];
        let transferrableAmount = Number(amount);
        earningsData.forEach(({ _id, amount, paidAmount: alreadyPaid, status }) => {
            if (transferrableAmount > 0) {
                let payableAmount = status === "partially paid" ? (amount - alreadyPaid) : amount
                let paidAmount = transferrableAmount > payableAmount ? payableAmount : transferrableAmount;
                posts.push({
                    id: _id,
                    paidAmount: alreadyPaid + paidAmount,
                    status: alreadyPaid + paidAmount === amount ? 'paid' : 'partially paid'
                })
                transferrableAmount = transferrableAmount - payableAmount;
            }
        });
        if (accountData) {
            let payoutResponse = await RazorPayPayout.create({
                "account_number": process.env.RAZORPAYX_ACCOUNT_NUMBER,
                "fund_account_id": accountData.id,
                "amount": Number(amount) * 100,
                "currency": "INR",
                "mode": accountData.account_type === 'vpa' ? "UPI" : 'IMPS',
                "purpose": "payout",
            })
            const { isError: isCreatingError, messages: creatingPayoutMessage, data: payoutData } = payoutResponse || {}
            if (isCreatingError) {
                return res.status(400).json({
                    message: creatingPayoutMessage[0],
                });
            }
            for (let index = 0; index < posts.length; index++) {
                const element = posts[index];
                const earningUpdate = await EarningModel.updateOne({
                    _id: element.id,
                }, {
                    $set: {
                        status: element.status,
                        paidAmount: element.paidAmount,
                    }
                })
            }
            const totalPayouts = await PayoutModel.countDocuments({
                $expr: {
                    $eq: [{ $year: "$createdAt" }, parseInt(moment().format("YYYY"))]
                }
            })
            await PayoutModel.create({
                userId: user._id,
                transactionId: `WEN-${moment().format("YYYY")}-${(totalPayouts + 1).toString().padStart(4, '0')}`,
                paymentId: payoutData.id,
                amount: payoutData.amount / 100,
                payoutStatus: 'paid',
                createdIP: getIp(req),
            });
            // try {
            //     await JobQueueModel.create({
            //         data: {
            //             to: user.email,
            //             subject: "Payout Success!!",
            //             body: "",
            //             templateName: "payoutSuccess",
            //             replaceObject: {
            //                 firstName: user.firstName,
            //             },
            //         },
            //         type: "email",
            //     });
            // } catch (error) {
            //     ErrorHelper.createError(error, req);
            // }
        }
        return res.status(200).json({ message: "Payout initiated successfully." });
    } catch (error) {
        return ErrorHelper.sendDefaultError(error, req, res);
    }
};

/**
 *
 * @param {*} param
 * @param {*} res
 */
const getTransactions = async (req, res) => {
    try {
        const { user, query } = req;
        const { currentPage = 1, limit = 12 } = query;
        const offset = (currentPage - 1) * limit;
        const data = await PayoutModel.find({
            userId: user._id
        }).skip(parseInt(offset)).limit(parseInt(limit)).sort({
            createdAt: -1
        });
        const totalRecords = await PayoutModel.countDocuments({
            userId: user._id
        })
        return res.status(200).json({
            message: "Transactions fetched successfully.",
            data,
            totalRecords
        })
    } catch (error) {
        return ErrorHelper.sendDefaultError(error, req, res);
    }
}

module.exports = {
    sendMoneyToCreator,
    getTransactions
}