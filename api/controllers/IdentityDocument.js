const { IdentityDocumentModel } = require("../models");
const { ErrorHelper } = require("../helpers");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const addVerificationDocument = async (req, res) => {
  try {
    const { body, files, user } = req;
    const data = {
      type: body.type,
      userId: user._id,
      status: "pending",
    };
    if (body.expirationDate !== "null") {
      data.expirationDate = body.expirationDate;
    }
    for (let i = 0; i < files.length; i++) {
      if (files[i].fieldname === "frontImage") {
        data.frontImage = files[0].filename;
      }
      if (files[i].fieldname === "backImage") {
        data.backImage = files[0].filename;
      }
    }
    const result = await IdentityDocumentModel.create(data);
    return res
      .status(200)
      .json({ result, message: "Document uploaded successfully." });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const updateVerificationStatus = async (req, res) => {
  try {
    const {
      body: { status, userId, note },
    } = req;
    await IdentityDocumentModel.updateOne(
      {
        userId,
      },
      {
        $set: {
          status,
          note,
        },
      }
    );
    return res.status(200).json({ message: "Status updated successfully" });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const updateVerificationDocument = async (req, res) => {
  try {
    const {
      body: { type, expirationDate, backImageRemoved },
      files,
      user: { _id },
    } = req;
    let data = {
      type,
      expirationDate,
      status: "pending",
    };
    if (expirationDate !== "null") {
      data = { ...data, expirationDate };
    }
    if (backImageRemoved) {
      data = { ...data, backImage: "" };
    }
    for (let i = 0; i < (files && files.length); i++) {
      if (files[i].fieldname === "frontImage") {
        data.frontImage = files[0].filename;
      }
      if (files[i].fieldname === "backImage") {
        data.backImage = files[0].filename;
      }
    }
    await IdentityDocumentModel.updateOne(
      {
        userId: _id,
      },
      {
        $set: data,
      }
    );
    return res
      .status(200)
      .json({ message: "Document resubmitted successfully." });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const fetchUploadedIdentityDocument = async (req, res) => {
  try {
    const {
      user: { _id },
    } = req;
    const result = await IdentityDocumentModel.findOne({ userId: _id });
    return res
      .status(200)
      .json({ data: result, message: "Document fetched successfully." });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getIDVerificationRequest = async (req, res) => {
  try {
    const result = await IdentityDocumentModel.find({
      userId: {
        $exists: true,
      },
    }).populate("userId", {
      firstName: 1,
      lastName: 1,
      email: 1,
    });
    return res
      .status(200)
      .json({ data: result, message: "Documents fetched successfully." });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

module.exports = {
  addVerificationDocument,
  updateVerificationStatus,
  updateVerificationDocument,
  fetchUploadedIdentityDocument,
  getIDVerificationRequest,
};
