const { ErrorHelper, MailchimpApiHelper } = require("./../helpers");
const { UserModel, JobQueueModel } = require("../models");
const { RazorPayContact } = require("razorpayx-nodejs-sdk");

const userList = async (req, res) => {
  try {
    const { query } = req;
    const { currentPage = 1, limit = 10, search, userType } = query;
    const offset = (currentPage - 1) * limit;
    const condition = {};
    if (userType) {
      condition.userType = userType;
    } else {
      condition.userType = { $in: ["guest", "creator"] };
    }
    if (search) {
      condition.$or = [
        {
          email: { $regex: search, $options: "i" },
        },
        {
          firstName: { $regex: search, $options: "i" },
        },
        {
          lastName: { $regex: search, $options: "i" },
        },
        {
          username: { $regex: search, $options: "i" },
        },
      ];
    }
    const data = await UserModel.find(condition)
      .select({ password: 0 })
      .sort({ createdAt: -1 })
      .skip(parseInt(offset))
      .limit(parseInt(limit));

    const totalRecords = await UserModel.countDocuments(condition);
    return res.status(200).json({
      data,
      totalRecords,
      message: "User fetched successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

const banUser = async (req, res) => {
  try {
    const {
      params: { id },
      body: { status },
    } = req;

    const data = await UserModel.findById(id);
    if (!data) {
      return res.status(400).json({
        message: "User not found.",
        isError: true,
      });
    }

    const result = await UserModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          status,
        },
      }
    );

    return res.status(200).json({
      data: result,
      message: "User banned successfully.",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

const userDetails = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const data = await UserModel.findById(id).select({
      firstName: 1,
      lastName: 1,
      username: 1,
      userType: 1,
      totalPosts: 1,
      totalFollowers: 1,
      about: 1,
      profileImage: 1,
      isVerified: 1,
    });
    if (!data) {
      return res.status(400).json({
        message: "User not found.",
        isError: true,
      });
    }
    return res.status(200).json({
      data,
      message: "User details fetched successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
const userDetailsByAdmin = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const data = await UserModel.findById(id);
    if (!data) {
      return res.status(400).json({
        message: "User not found.",
        isError: true,
      });
    }
    return res.status(200).json({
      data,
      message: "User details fetched successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

const updateUserVerificationStatus = async (req, res) => {
  try {
    const {
      params: { id },
      body: { isVerified },
    } = req;
    const data = await UserModel.findOne(
      { _id: id },
      { email: 1, firstName: 1, lastName: 1 }
    );
    const result = await UserModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          isVerified,
        },
      }
    );
    if (isVerified) {
      await JobQueueModel.create({
        data: {
          to: data.email,
          subject: "✅ Profile Verified Successfully!",
          templateName: "userVerified",
          replaceObject: {
            fullName: `${data.firstName} ${data.lastName}`,
          },
        },
        type: "email",
      });
    }
    return res.status(200).json({
      data: result,
      message: "User verification status updated successfully.",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

// const addRazorPayAccount = async() => {
//   try {
//     const allUser = await UserModel.find({
//       userType: "creator",
//     });
//     for (let index = 0; index < allUser.length; index++) {
//       const element = allUser[index];
//       try {
//         await MailchimpApiHelper.addMemberToList(
//           element.email,
//           element.firstName,
//           element.lastName
//         );
//         const contactCreateResponse = await RazorPayContact.create({
//           name: `${element.firstName} ${element.lastName}`,
//           email: element.email,
//           type: "customer",
//         });
//         if (!contactCreateResponse.isError) {
//           const r = await UserModel.updateOne({
//             _id: element._id
//           },{
//             $set:{
//               razorPayContactId:contactCreateResponse.data.id
//             }
//           });
//           console.log(r,'rrrrrrr');
//         }else{
//           console.log(contactCreateResponse,'contactCreateResponse', element._id);
//         }
//       } catch (error) {
//         console.log(error,'error', element._id);
//       }
//     }
//   } catch (error) {
//     console.log(error,'last error');
//   }
// }

module.exports = {
  userList,
  userDetails,
  userDetailsByAdmin,
  updateUserVerificationStatus,
  // addRazorPayAccount,
  banUser,
};
