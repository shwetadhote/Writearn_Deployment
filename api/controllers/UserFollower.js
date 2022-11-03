const { UserFollowerModel, UserModel } = require("../models");
const { ErrorHelper } = require("../helpers");
const { addNewNotification } = require("./Notification");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const saveFollowingStatus = async (req, res) => {
  try {
    const { isFollowing, followeeId } = req.body;
    const followeeData = await UserModel.findById(followeeId, { username: 1 });
    if (!followeeData) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const result = await UserFollowerModel.findOne({
      followeeId,
      followerId: req.user._id,
    });
    let responseData, message, title;
    if (result) {
      await UserFollowerModel.updateOne(
        {
          followeeId,
          followerId: req.user._id,
        },
        {
          $set: {
            isFollowing,
          },
        }
      );
      responseData = req.body;
      message = `You have successfully ${
        isFollowing ? "followed" : "unfollowed"
      } this user.`;
    } else {
      let data = {
        isFollowing,
        followeeId,
        followerId: req.user._id,
      };
      responseData = await UserFollowerModel.create(data);
      message = "You have successfully followed this user.";
    }

    if (isFollowing) {
      // Notification for new follower
      await addNewNotification({
        userId: followeeId,
        title: `<a href="/user/${req.user._id}/${req.user.username}">${req.user.firstName} ${req.user.firstName}</a> started following you.`,
        content: "",
        type: "info",
        redirectionURL: `/user/${req.user._id}/${req.user.username}`,
      });
    }

    return res.status(200).json({
      data: responseData,
      message,
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

const getFollowersByUserId = async (req, res) => {
  try {
    const {
      params: { userId },
    } = req;
    const result = await UserFollowerModel.find({
      followeeId: userId,
      isFollowing: true,
    }).populate("followerId", {
      firstName: 1,
      isVerified: 1,
      lastName: 1,
      username: 1,
      profileImage: 1,
      about: 1,
    });
    if (result) {
      return res.status(200).json({
        data: result,
        message: "Followers list fetched successfully.",
      });
    }
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

module.exports = {
  saveFollowingStatus,
  getFollowersByUserId,
};
