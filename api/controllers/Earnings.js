const { ErrorHelper, IPHelper: { getIp } } = require("./../helpers");
const { EarningModel, JobQueueModel, UserModel } = require("../models");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const fetchUserEarnings = async (req, res) => {
    try {
        const { user, query } = req;
        const { currentPage = 1, limit = 12, status, sortByAmount } = query;
        const offset = (currentPage - 1) * limit;
        let condition = {
            userId: user._id
        }
        let sort = {
            createdAt: -1
        }
        if (status !== 'all') {
            condition = {
                ...condition,
                status
            }
        }
        if (sortByAmount) {
            sort = {
                amount: sortByAmount === "asc" ? 1 : -1
            }
        }
        const earnings = await EarningModel.aggregate([
            {
                $match: condition
            },
            {
                $lookup: {
                    from: 'posts',
                    as: 'post',
                    foreignField: '_id',
                    localField: 'postId'
                }
            },
            {
                $unwind: { path: '$post', preserveNullAndEmptyArrays: true },
            },
            {
                $group: {
                    _id: {
                        '$cond': [
                            { '$ne': ['$type', 'bonus'] },
                            { postId: '$postId', status: '$status' },
                            '$_id'
                        ]
                    },
                    type: { $first: '$type' },
                    earningDescription: { $first: '$earningDescription' },
                    amount: { $first: '$amount' },
                    paidAmount: { $first: '$paidAmount' },
                    status: { $first: '$status' },
                    views: { $first: '$views' },
                    postId: { $first: '$postId' },
                    postTitle: { $first: '$post.title' },
                    createdAt: { $first: '$createdAt' },
                }
            },
            {
                $sort: sort
            },
            {
                $skip: parseInt(offset)
            },
            {
                $limit: parseInt(limit)
            },
        ]);
        const totalRecords = await EarningModel.aggregate([
            {
                $match: condition
            },
            {
                $lookup: {
                    from: 'posts',
                    as: 'post',
                    foreignField: '_id',
                    localField: 'postId'
                }
            },
            {
                $unwind: { path: '$post', preserveNullAndEmptyArrays: true },
            },
            {
                $group: {
                    _id: {
                        '$cond': [
                            { '$ne': ['$type', 'bonus'] },
                            { postId: '$postId', status: '$status' },
                            '$_id'
                        ]
                    },
                }
            },
            {
                $count: 'count'
            }
        ]);
        return res.status(200).json({
            earnings,
            totalRecords: totalRecords && totalRecords.length ? totalRecords[0].count : 0,
        })
    } catch (error) {
        return ErrorHelper.sendDefaultError(error, req, res);
    }
}

/**
 *
 * @param {*} param
 * @param {*} res
 */
const addBonus = async (req, res) => {
    try {
        const { body: { amount, userId, description } } = req;
        const userData = await UserModel.findById(userId, { email: 1 });
        if (!userData) {
            return res.status(404).json({
                message: "User not found",
            })
        }
        const earning = new EarningModel({
            userId,
            amount,
            earningDescription: description,
            status: "unpaid",
            type: "bonus",
            createdIP: getIp(req),
        });
        await earning.save();
        try {
            await JobQueueModel.create({
                data: {
                    to: userData.email,
                    subject: "Congratulations 🎉! Writearn Sent you Bonus",
                    body: "",
                    templateName: "bonusSuccess",
                    replaceObject: {
                        fullName: [userData.firstName, userData.lastName].join(' '),
                        amount,
                        reason: description,
                        addPostUrl: `${process.env.PORTAL_URL}/post/add`,
                    },
                },
                type: "email",
            });
        } catch (error) {
            ErrorHelper.createError(error, req);
        }
        return res.status(200).json({
            message: "Bonus added successfully",
        })
    } catch (error) {
        return ErrorHelper.sendDefaultError(error, req, res);
    }
}

module.exports = {
    addBonus,
    fetchUserEarnings
}