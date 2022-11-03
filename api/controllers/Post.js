const { ErrorHelper, PasswordHelper } = require("./../helpers");
const { generatePassword } = require("../helpers/Password");
const { PostValidator } = require("../validation");
const { RazorPayContact } = require("razorpayx-nodejs-sdk");
const fs = require("fs");
const { Types } = require("mongoose");
const moment = require("moment");

const { getIp } = require("../helpers/IP");
const {
  EarningModel,
  JobQueueModel,
  PostModel,
  PostCommentModel,
  PostLikeModel,
  PostViewModel,
  SettingModel,
  UserModel,
} = require("../models");

const addFollowerNotification = async (userId, postId) => {
  try {
  } catch (error) {}
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getPosts = async (req, res) => {
  try {
    const { user, query } = req;
    const {
      currentPage = 1,
      limit = 12,
      searchKey,
      filterBy,
      postType,
    } = query;
    const offset = (currentPage - 1) * limit;
    const condition = {
      author: user._id,
    };
    if (postType) {
      condition.postType = postType;
    }
    let sort = {
      createdAt: -1,
    };
    if (filterBy === "oldest") {
      sort = {
        createdAt: 1,
      };
    }
    if (searchKey) {
      condition.$or = [
        {
          title: {
            $regex: new RegExp(searchKey.trim(), "i"),
          },
        },
        {
          shortDescription: {
            $regex: new RegExp(searchKey.trim(), "i"),
          },
        },
      ];
    }

    const data = await PostModel.find(condition)
      .sort({
        createdAt: -1,
      })
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .populate("author", { profileImage: 1, firstName: 1, lastName: 1 })
      .populate("categories", { name: 1, slug: 1 })
      .populate("postType", { name: 1, slug: 1 });

    const totalRecords = await PostModel.countDocuments(condition);
    return res.status(200).json({
      data,
      totalRecords,
      message: "Post fetched successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getPostsByUserId = async (req, res) => {
  try {
    const {
      params: { id: userId },
      query: { currentPage = 1, limit = 4, filterBy, postType },
    } = req;
    const offset = (currentPage - 1) * limit;
    let condition = {
      author: userId,
      status: "active",
    };
    if (postType && postType !== "all") {
      condition = {
        ...condition,
        postType,
      };
    }
    let sort = {
      createdAt: -1,
    };
    if (filterBy === "oldest") {
      sort = {
        createdAt: 1,
      };
    }
    const data = await PostModel.find(condition)
      .sort(sort)
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .populate("categories", { name: 1, slug: 1 })
      .populate("postType", { name: 1, slug: 1 });
    const totalRecords = await PostModel.countDocuments(condition);
    return res.status(200).json({
      data,
      totalRecords,
      message: "Post fetched successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getSinglePost = async (req, res) => {
  try {
    const data = await PostModel.findOne({
      slug: req.params.slug,
      _id: req.params.id,
      author: req.user._id,
    });
    return res.status(200).json({
      data,
      message: "Post fetched successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const addPost = async (req, res) => {
  try {
    const { errors, isValid } = PostValidator(req.body);
    if (!isValid) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (error) {}
      return res
        .status(422)
        .json({ errors, message: "Request data not valid." });
    }
    const { categories, postType, title, slug, tags, shortDescription } =
      req.body;
    const isPostExist = await PostModel.findOne({
      slug: slug.trim(),
    });
    if (isPostExist) {
      return res.status(400).json({
        message:
          "This slug is already associated with another one. Try another one!!",
      });
    }
    let { description } = req.body;
    try {
      description = JSON.parse(description);
    } catch (error) {
      console.log("error in parsing description, it should be a string", error);
    }
    const data = {
      title,
      slug: slug.trim(),
      postType,
      shortDescription,
      categories: JSON.parse(categories),
      description,
      tags: JSON.parse(tags),
      featuredImage: req.file.filename,
      status: req.user.isVerified ? "active" : "pending",
      author: req.user._id,
      createdIP: getIp(req),
    };
    await PostModel.create(data);
    if (req.user.isVerified) {
      addFollowerNotification(req.user._id);
    }
    return res.status(200).json({
      data: req.body,
      message: req.user.isVerified
        ? "Post added successfully."
        : "Post added successfully, one of our team member will review it soon.",
    });
  } catch (error) {
    try {
      fs.unlinkSync(req.file.path);
    } catch (error) {}
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const updatePost = async (req, res) => {
  try {
    const { errors, isValid } = PostValidator(req.body);
    if (!isValid) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (error) {}
      return res
        .status(422)
        .json({ errors, message: "Request data not valid." });
    }
    const { categories, postType, title, tags, shortDescription } = req.body;
    let { description } = req.body;
    try {
      description = JSON.parse(description);
    } catch (error) {
      console.log("error in parsing description, it should be a string", error);
    }
    const data = {
      title,
      postType,
      shortDescription,
      categories: JSON.parse(categories),
      description,
      tags: JSON.parse(tags),
      status: req.user.isVerified ? "active" : "pending",
    };

    if (req.file && req.file.filename) {
      data.featuredImage = req.file.filename;
    }
    await PostModel.updateOne(
      { _id: req.params.id },
      {
        $set: data,
        $push: {
          updated: {
            ip: getIp(req),
            updatedBy: req.user._id,
          },
        },
      }
    );
    return res.status(200).json({
      message:
        "Post updated successfully, one of our team member will review it soon.",
    });
  } catch (error) {
    try {
      fs.unlinkSync(req.file.path);
    } catch (error) {}
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const deletePost = async (req, res) => {
  try {
    const data = await PostModel.updateOne(
      {
        _id: req.params.id,
        author: req.user._id,
      },
      {
        isDeleted: true,
      }
    );
    return res.status(200).json({
      data,
      message: "Post deleted successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getPostsByPostType = async (req, res) => {
  try {
    const {
      query,
      params: { postType },
    } = req;
    const { currentPage = 1, limit = 12, searchKey } = query;
    const offset = (currentPage - 1) * limit;
    let condition = { status: "active" };
    const data = await PostModel.aggregate([
      { $match: condition },
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "_id",
          as: "author",
        },
      },
      { $unwind: "$author" },
      {
        $lookup: {
          from: "categories",
          localField: "categories",
          foreignField: "_id",
          as: "categories",
        },
      },
      // { $unwind: '$categories' },
      {
        $lookup: {
          from: "post_types",
          localField: "postType",
          foreignField: "_id",
          as: "postType",
        },
      },
      { $unwind: "$postType" },
      {
        $match: {
          "postType.slug": postType,
        },
      },
      {
        $project: {
          title: 1,
          slug: 1,
          shortDescription: 1,
          featuredImage: 1,
          totalViews: 1,
          totalLikes: 1,
          totalDislikes: 1,
          totalComments: 1,
          totalShares: 1,
          tags: 1,
          status: 1,
          createdAt: 1,
          "author.profileImage": 1,
          "author.firstName": 1,
          "author.lastName": 1,
          "author.isVerified": 1,
          "categories.name": 1,
          "categories.slug": 1,
          "postType.name": 1,
          "postType.slug": 1,
          "postType._id": 1,
        },
      },
    ])
      .sort({
        createdAt: -1,
      })
      .skip(parseInt(offset))
      .limit(parseInt(limit));

    const totalRecords = await PostModel.aggregate([
      { $match: condition },
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "_id",
          as: "author",
        },
      },
      { $unwind: "$author" },
      {
        $lookup: {
          from: "categories",
          localField: "categories",
          foreignField: "_id",
          as: "categories",
        },
      },
      // { $unwind: '$categories' },
      {
        $lookup: {
          from: "post_types",
          localField: "postType",
          foreignField: "_id",
          as: "postType",
        },
      },
      { $unwind: "$postType" },
      {
        $match: {
          "postType.slug": postType,
        },
      },
      {
        $project: {
          title: 1,
          slug: 1,
          shortDescription: 1,
          featuredImage: 1,
          totalViews: 1,
          totalLikes: 1,
          totalDislikes: 1,
          totalComments: 1,
          totalShares: 1,
          tags: 1,
          status: 1,
          "author.profileImage": 1,
          "author.firstName": 1,
          "author.lastName": 1,
          "categories.name": 1,
          "categories.slug": 1,
          "postType.name": 1,
          "postType.slug": 1,
        },
      },
      { $count: "count" },
    ]);
    return res.status(200).json({
      data,
      totalRecords:
        totalRecords && totalRecords.length ? totalRecords[0].count : 0,
      message: "Post fetched successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getAllActivePosts = async (req, res) => {
  try {
    const { query } = req;
    const { currentPage = 1, limit = 12, searchKey, postType } = query;
    const offset = (currentPage - 1) * limit;
    const condition = {
      status: "active",
    };
    if (searchKey) {
      condition.$or = [
        {
          title: {
            $regex: new RegExp(searchKey.trim(), "i"),
          },
        },
        {
          shortDescription: {
            $regex: new RegExp(searchKey.trim(), "i"),
          },
        },
      ];
    }
    if (postType) {
      condition.postType = postType;
    }
    const data = await PostModel.find(condition)
      .sort({
        createdAt: -1,
      })
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .populate("author", { profileImage: 1, firstName: 1, lastName: 1 })
      .populate("categories", { name: 1, slug: 1 })
      .populate("postType", { name: 1, slug: 1 });

    const totalRecords = await PostModel.countDocuments(condition);
    return res.status(200).json({
      data,
      totalRecords,
      message: "Post fetched successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/* Admin methods starts */
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getAllPosts = async (req, res) => {
  try {
    const { query } = req;
    const {
      currentPage = 1,
      limit = 12,
      searchKey,
      postType,
      userIds,
      status,
      fromDate,
      toDate,
    } = query;
    const offset = (currentPage - 1) * limit;
    const condition = {};
    if (searchKey) {
      condition.$or = [
        {
          title: {
            $regex: new RegExp(searchKey.trim(), "i"),
          },
        },
        {
          shortDescription: {
            $regex: new RegExp(searchKey.trim(), "i"),
          },
        },
      ];
    }
    if (postType) {
      condition.postType = postType;
    }
    if (status) {
      condition.status = status;
    }
    if (fromDate && toDate) {
      condition.createdAt = {
        $gte: new Date(moment.utc(fromDate).startOf("day").format()),
        $lte: new Date(moment.utc(toDate).endOf("day").format()),
      };
    }
    if (userIds.trim()) {
      condition.author = {
        $in: userIds.trim().split(","),
      };
    }
    const data = await PostModel.find(condition)
      .sort({
        "updated.date": -1,
        createdAt: -1,
      })
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .populate("author", { profileImage: 1, firstName: 1, lastName: 1 })
      .populate("categories", { name: 1, slug: 1 })
      .populate("postType", { name: 1, slug: 1 });

    const totalRecords = await PostModel.countDocuments(condition);
    return res.status(200).json({
      data,
      totalRecords,
      message: "Post fetched successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getRelatedPosts = async (req, res) => {
  try {
    const {
      query,
      params: { postType },
    } = req;
    const { postId, authorId } = query;
    const condition = {
      status: "active",
    };
    if (postId) {
      condition._id = {
        $ne: postId,
      };
    }
    if (postType) {
      condition.postType = postType;
    }
    if (authorId) {
      condition.author = {
        $ne: authorId,
      };
    }
    const data = await PostModel.find(condition)
      .sort({
        createdAt: -1,
      })
      .limit(9)
      .populate("author", { profileImage: 1, firstName: 1, lastName: 1 })
      .populate("categories", { name: 1, slug: 1 })
      .populate("postType", { name: 1, slug: 1 });
    return res.status(200).json({
      data,
      message: "Similar Posts fetched successfully!",
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
const updateStatus = async (req, res) => {
  try {
    const { body, user } = req;
    const { _id: userId } = user;
    const { status, id, message } = body;

    await PostModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          status,
          note: message,
        },
        $push: {
          updated: {
            ip: getIp(req),
            updatedBy: userId,
          },
        },
      }
    );

    const result = await PostModel.aggregate([
      { $match: { _id: Types.ObjectId(id) } },
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "_id",
          as: "author",
        },
      },

      { $unwind: "$author" },
      {
        $lookup: {
          from: "post_types",
          localField: "postType",
          foreignField: "_id",
          as: "postType",
        },
      },
      { $unwind: "$postType" },
      {
        $lookup: {
          from: "categories",
          localField: "categories",
          foreignField: "_id",
          as: "categories",
        },
      },
      {
        $project: {
          title: 1,
          slug: 1,
          "author.firstName": 1,
          "author.lastName": 1,
          "author.email": 1,
          "author._id": 1,
          "author.email:": 1,
          "postType.slug": 1,
          "categories.slug": 1,
        },
      },
    ]);

    if (result && result.length) {
      const categoriesSlug = result[0].categories
        .map(({ slug }) => slug)
        .join("-");
      let postUrl = `${process.env.FRONTEND_URL}/blog/${result[0].postType.slug}/${categoriesSlug}/${result[0].slug}`;
      let replaceObject = {
        fullName: `${result[0].author.firstName} ${result[0].author.lastName}`,
        title: result[0].title,
        postUrl,
        userPortalUrl: `${process.env.PORTAL_URL}/post/edit/${id}/${result[0].slug}`,
        addPostUrl: `${process.env.PORTAL_URL}/post/add`,
      };
      try {
        if (status === "active") {
          let r = await JobQueueModel.create({
            data: {
              to: result[0].author.email,
              subject: "👍 Post Published",
              templateName: "postStatusUpdation",
              replaceObject,
            },
            type: "email",
          });
        }
        if (status === "rejected") {
          await JobQueueModel.create({
            data: {
              to: result[0].author.email,
              subject: "👎 Post rejected",
              templateName: "postRejection",
              replaceObject: {
                ...replaceObject,
                message,
                editPostUrl: `${process.env.PORTAL_URL}/post/edit/${id}/${result[0].slug}`,
              },
            },
            type: "email",
          });
        }
        return res.status(200).json({
          message: "Post status updated successfully!",
        });
      } catch (error) {
        ErrorHelper.createError(error, req);
      }
    }
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

/* Admin methods ends */

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getSinglePubicPost = async (req, res) => {
  try {
    const { query } = req;
    const { isPreview } = query;
    let condition = { slug: req.params.slug };
    if (isPreview !== "true") {
      condition = {
        ...condition,
        status: "active",
      };
    }

    const data = await PostModel.findOne(condition)
      .populate("categories", { name: 1, slug: 1 })
      .populate("postType", { name: 1, slug: 1 })
      .populate("author", {
        firstName: 1,
        isVerified: 1,
        lastName: 1,
        username: 1,
        profileImage: 1,
        about: 1,
      });
    return res.status(200).json({
      data,
      message: "Post fetched successfully!",
      isError: !data,
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const likePost = async (req, res) => {
  try {
    const { user, params } = req;
    const isPostLiked = await PostLikeModel.findOne({
      postId: params.id,
      userId: user._id,
    });
    let isLikedByUser = true;
    if (isPostLiked) {
      if (isPostLiked.isLiked) {
        await isPostLiked.remove();
        isLikedByUser = false;
      } else {
        await PostLikeModel.updateOne(
          {
            postId: params.id,
            _id: isPostLiked._id,
          },
          {
            $set: {
              isLiked: true,
            },
          }
        );
      }
    } else {
      const newPost = new PostLikeModel({
        postId: params.id,
        userId: user._id,
        createdIP: getIp(req),
        isLiked: true,
      });
      await newPost.save();
    }
    const newPostLikes = await PostModel.findById(params.id, {
      totalLikes: 1,
      totalDislikes: 1,
    });
    return res.status(200).json({
      data: newPostLikes,
      isLikedByUser,
      message: "Post liked successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const dislikePost = async (req, res) => {
  try {
    const { user, params } = req;
    await PostLikeModel.find({
      postId: params.id,
      userId: user._id,
    });
    const isPostLiked = await PostLikeModel.findOne({
      postId: params.id,
      userId: user._id,
    });
    let isDislikedByUser = true;
    if (isPostLiked) {
      if (!isPostLiked.isLiked) {
        await isPostLiked.remove();
        isDislikedByUser = false;
      } else {
        await PostLikeModel.updateOne(
          {
            postId: params.id,
            _id: isPostLiked._id,
          },
          {
            $set: {
              isLiked: false,
            },
          }
        );
      }
    } else {
      const newPost = new PostLikeModel({
        postId: params.id,
        userId: user._id,
        isLiked: false,
        createdIP: getIp(req),
      });
      await newPost.save();
    }
    const newPostLikes = await PostModel.findById(params.id, {
      totalDislikes: 1,
      totalLikes: 1,
    });

    return res.status(200).json({
      data: newPostLikes,
      isDislikedByUser,
      message: "Post disliked successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const viewPost = async (req, res) => {
  try {
    const { user, params } = req;
    const postDetails = await PostModel.findById(params.id).select({
      author: 1,
    });
    // To check if author themselves view own post
    let isPostAuthorLoggedIn =
      user._id.toString() === postDetails.author.toString();
    if (!postDetails) {
      return res.status(400).json({
        message: "Post not found.",
      });
    }
    const settingData = await SettingModel.findOne({
      key: "views",
    });
    const isPostAlreadyViewed = await PostViewModel.findOne({
      postId: params.id,
      userId: user._id,
    });
    const isEarningRecordExist = await EarningModel.findOne({
      postId: params.id,
      userId: postDetails.author,
      status: "unpaid",
    });
    if (isPostAlreadyViewed) {
      let updateCounter = {
        viewCount: 1,
      };
      // To check if author themselves view own post
      // if (!isPostAuthorLoggedIn) {
      //   updateCounter = {
      //     ...updateCounter,
      //     amountEarned: settingData ? 1 / settingData.value : 0,
      //   };
      // }
      await PostViewModel.updateOne(
        {
          postId: params.id,
          userId: user._id,
        },
        {
          $set: {
            lastUpdatedIP: getIp(req),
            lastUpdatedAt: Date.now(),
          },
          $inc: updateCounter,
        }
      );
    } else {
      let amountEarned =
        !isPostAuthorLoggedIn && settingData ? 1 / settingData.value : 0;
      const newView = new PostViewModel({
        postId: params.id,
        userId: user._id,
        viewCount: 1,
        createdIP: getIp(req),
        amountEarned,
      });
      await newView.save();
    }
    // To update earnings
    if (!isPostAuthorLoggedIn && !isPostAlreadyViewed) {
      let amountEarned = settingData ? 1 / settingData.value : 0;
      if (isEarningRecordExist) {
        await EarningModel.updateOne(
          {
            postId: params.id,
            _id: isEarningRecordExist._id,
          },
          {
            $inc: {
              views: 1,
              amount: amountEarned,
            },
          }
        );
      } else {
        const newEarning = new EarningModel({
          postId: params.id,
          userId: postDetails.author,
          views: 1,
          amount: amountEarned,
          status: "unpaid",
          createdIP: getIp(req),
        });
        await newEarning.save();
      }
    }
    const newPostViews = await PostModel.findById(params.id, { totalViews: 1 });
    return res.status(200).json({
      data: newPostViews,
      message: "Post marked as viewed successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const addcommentPost = async (req, res) => {
  try {
    const {
      user,
      params,
      body: { comment, email, name },
    } = req;
    let userId = user._id;

    if (user.userType !== "creator") {
      const userData = await UserModel.findOne({
        email,
      });
      if (!userData) {
        let newUser = await createUser(req, { name, email });
        userId = newUser._id;
      } else {
        userId = userData._id;
      }
    }
    const newComment = new PostCommentModel({
      postId: params.id,
      userId,
      comment,
      createdIP: getIp(req),
    });
    const newCommentData = await newComment.save();
    const commentData = await PostCommentModel.findOne({
      _id: newCommentData._id,
    }).populate("userId");
    return res.status(200).json({
      data: commentData,
      message: "Comment added successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const postComments = async (req, res) => {
  try {
    const {
      params: { id },
      query,
    } = req;
    const skip = query.skip ? parseInt(query.skip) : 0;
    const limit = query.limit ? parseInt(query.limit) : 0;
    const comments = await PostCommentModel.find({
      postId: id,
    })
      .populate("userId")
      .sort({
        createdAt: -1,
      })
      .skip(skip)
      .limit(limit);
    const totalRecords = await PostCommentModel.countDocuments({
      postId: id,
    });
    return res.status(200).json({
      data: comments,
      totalRecords,
      message: "Comments fetched successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getAllPostsByUserId = async (req, res) => {
  try {
    const {
      params: { id: userId },
      query: { currentPage = 1, limit = 10, filterBy, postType },
    } = req;
    const offset = (currentPage - 1) * limit;
    let condition = {
      author: userId,
    };
    if (postType && postType !== "all") {
      condition = {
        ...condition,
        postType,
      };
    }
    let sort = {
      createdAt: -1,
    };
    if (filterBy === "oldest") {
      sort = {
        createdAt: 1,
      };
    }
    const data = await PostModel.find(condition)
      .sort(sort)
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .populate("categories", { name: 1, slug: 1 })
      .populate("postType", { name: 1, slug: 1 });
    const totalRecords = await PostModel.countDocuments(condition);
    return res.status(200).json({
      data,
      totalRecords,
      message: "Post fetched successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const banfromTrending = async (req, res) => {
  try {
    const {
      params: { id: postId },
      body: { isBanned },
    } = req;
    await PostModel.updateOne(
      { _id: postId },
      {
        $set: {
          isBannedFromTrending: isBanned,
        },
        $push: {
          updated: {
            ip: getIp(req),
            updatedBy: req.user._id,
          },
        },
      }
    );

    return res.status(200).json({
      message: `Post ${isBanned ? "banned" : "unbanned"} fetched successfully!`,
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const fetchPostEngagement = async (req, res) => {
  const { user, params } = req;
  const data = await PostLikeModel.findOne({
    postId: params.id,
    userId: user._id,
  });
  if (data) {
    return res.status(200).json({
      data,
      message: "Post Enagement data fetched successfully!",
    });
  }
  return res.status(404).json({
    data,
    message: "No Data found",
  });
};

const getMoreAuthorPost = async (req, res) => {
  try {
    const {
      query,
      params: { authorId },
    } = req;
    const { postId, limit } = query;
    let authorlimit = limit ? parseInt(limit) : 6;
    const condition = {
      status: "active",
    };
    if (postId) {
      condition._id = {
        $ne: postId,
      };
    }
    if (authorId) {
      condition.author = authorId;
    }
    const data = await PostModel.find(condition)
      .sort({
        createdAt: -1,
      })
      .limit(authorlimit)
      .populate("author", { profileImage: 1, firstName: 1, lastName: 1 })
      .populate("categories", { name: 1, slug: 1 })
      .populate("postType", { name: 1, slug: 1 });
    const totalRecords = await PostModel.countDocuments(condition);

    return res.status(200).json({
      data,
      totalRecords,
      message: "More post from author  fetched successfully!",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

const createUser = async (req, data) => {
  const { name, email } = data;
  const contactCreateResponse = await RazorPayContact.create({
    name: /^[A-Za-z]+$/.test(name) ? name : email.split("@")[0],
    email: email,
    type: "customer",
  });
  if (!contactCreateResponse.isError) {
    razorPayContactId = contactCreateResponse.data.id;
  }
  const fullName = name.split(" ");
  let firstName = "",
    lastName = "";
  if (fullName.length > 1) {
    lastName = fullName.pop();
    firstName = fullName.join(" ");
  } else {
    firstName = name;
  }
  let password = generatePassword();
  const u = new UserModel({
    razorPayContactId,
    userType: "creator",
    firstName,
    lastName,
    email,
    username: email.split("@")[0],
    password: PasswordHelper.encryptPassword(password),
    createdIP: getIp(req),
  });
  const newUser = await u.save();
  try {
    await JobQueueModel.create({
      data: {
        to: newUser.email,
        subject: "📌Welcome to WRITEARN 🖌",
        templateName: "userCreation",
        replaceObject: {
          firstName: newUser.firstName,
          email: newUser.email,
          password,
        },
      },
      type: "email",
    });
  } catch (error) {
    console.log("error", error);
    ErrorHelper.createError(error, req);
  }
  return newUser;
};
module.exports = {
  getPosts,
  getSinglePost,
  addPost,
  updatePost,
  deletePost,
  getAllPosts,
  getAllActivePosts,
  updateStatus,
  getSinglePubicPost,
  likePost,
  dislikePost,
  viewPost,
  addcommentPost,
  postComments,
  getPostsByUserId,
  getRelatedPosts,
  getPostsByPostType,
  getAllPostsByUserId,
  banfromTrending,
  fetchPostEngagement,
  getMoreAuthorPost,
};
