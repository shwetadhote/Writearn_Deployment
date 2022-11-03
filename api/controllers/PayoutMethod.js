const { ErrorHelper } = require("./../helpers");
const {
  RazorPayFundAccount,
  RazorPayContact,
} = require("razorpayx-nodejs-sdk");
const { UserModel } = require("../models");
/**
 *
 * @param {*} req
 * @param {*} res
 */
const addPayoutMethod = async (req, res) => {
  try {
    let { user } = req;
    const { body } = req;
    if (!user.razorPayContactId) {
      const contactCreateResponse = await RazorPayContact.create({
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        contact: user.phoneNumber,
        type: "customer",
      });
      if (contactCreateResponse.isError) {
        throw new Error(contactCreateResponse.data);
      }
      user.razorPayContactId = contactCreateResponse.data.id;
      await UserModel.updateOne(
        {
          _id: user._id,
        },
        {
          $set: {
            razorPayContactId: user.razorPayContactId,
          },
        }
      );
    }
    const { isError, messages, data } = await RazorPayFundAccount.create({
      contact_id: user.razorPayContactId,
      ...body,
    });
    if (isError) {
      return res.status(400).json({
        message: messages[0],
      });
    }
    return res.status(200).json({
      message: "Payout method added successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} param0
 * @param {*} res
 */
const getPayoutMethods = async (req, res) => {
  try {
    const { user } = req;
    const { isError, messages, data } = await RazorPayFundAccount.getAll({
      contact_id: user.razorPayContactId,
    });
    if (isError) {
      return res.status(400).json({
        message: messages[0],
      });
    }
    return res.status(200).json(data);
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

/**
 *
 * @param {*} param0
 * @param {*} res
 */
const deactivateAccount = async (req, res) => {
  try {
    const { params } = req;

    const { isError, messages } = await RazorPayFundAccount.deactivate(
      params.accountId
    );
    if (isError) {
      return res.status(400).json({
        message: messages[0],
      });
    }
    return res
      .status(200)
      .json({ message: "Account deactivated successfully!" });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} param0
 * @param {*} res
 */
const activateAccount = async (req, res) => {
  try {
    const { params } = req;
    const { isError, messages } = await RazorPayFundAccount.activate(
      params.accountId
    );
    if (isError) {
      return res.status(400).json({
        message: messages[0],
      });
    }
    return res.status(200).json({ message: "Account activated successfully!" });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 */
module.exports = {
  addPayoutMethod,
  getPayoutMethods,
  deactivateAccount,
  activateAccount,
};
