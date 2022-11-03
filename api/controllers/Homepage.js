const { PostModel, UserModel } = require("../models");
const { Types } = require("mongoose");
const { ErrorHelper } = require("./../helpers");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getTopPicks = async (req, res) => {
  try {
    const result = await PostModel.aggregate([
      {
        $match: {
          status: "active",
          isBannedFromTrending: {
            $ne: true,
          },
        }
      },
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
        $addFields: {
          daydiff: { '$divide': [{ $subtract: [new Date(), '$createdAt'] }, 1000 * 60 * 60 * 24] },
        }
      },
      {
        $project: {
          _id: 1,
          tags: 1,
          totalUniqueViews: 1,
          totalViews: 1,
          totalLikes: 1,
          totalDislikes: 1,
          totalComments: 1,
          isBannedFromTrending: 1,
          title: 1,
          shortDescription: 1,
          featuredImage: 1,
          status: 1,
          slug: 1,
          daydiff: 1,
          createdAt:1,
          "author.profileImage": 1,
          "author.firstName": 1,
          "author.lastName": 1,
          "author.isVerified": 1,
          "author._id": 1,
          'categories.name': 1,
          'categories.slug': 1,
          'categories._id': 1,
          'postType.name': 1,
          'postType.slug': 1,
          'postType._id': 1,
          viewsPerDay: {
            $cond: [{ $eq: ["$totalViews", 0] }, 0, {
              "$divide": ['$totalViews',
                {
                  $cond: [{
                    $lt: ["$daydiff", 1]
                  }, 1,
                    '$daydiff'
                  ]
                },
              ]
            }]
          }
        }
      },
      {
        $sort: {
          viewsPerDay: -1
        }
      },
      {
        $limit: 3
      }
    ])
    // const posts = await PostModel.find({
    //   status: "active",
    //   isBannedFromTrending: {
    //     $ne: true,
    //   },
    // })
    //   .sort({
    //     totalViews: -1,
    //     totalLikes: -1,
    //     totalComments: -1,
    //     totalShares: -1,
    //   })
    //   .limit(3)
    //   .populate("postType", { name: 1, slug: 1 })
    //   .populate("categories", {
    //     name: 1,
    //     slug: 1,
    //   })
    //   .populate("author", { firstName: 1, lastName: 1, username: 1 });
    return res.status(200).json(result);
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getTopAuthors = async (req, res) => {
  try {
    const posts = await UserModel.find({
      userType: "creator",
      totalPosts: {
        $gt: 0,
      },
    })
      .sort({
        totalFollowers: -1,
        totalPosts: -1,
        createdAt: 1,
      })
      .limit(9)
      .populate("postType", { name: 1, slug: 1 })
      .populate("categories", {
        name: 1,
        slug: 1,
      })
      .populate("author", { firstName: 1, lastName: 1, username: 1 });
    return res.status(200).json(posts);
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 */
const getLatestPostByPostType = async (req, res) => {
  try {
    const posts = await PostModel.find({
      status: "active",
      postType: Types.ObjectId(req.params.postTypeId),
    })
      .select({
        author: 1,
        title: 1,
        slug: 1,
        featuredImage: 1,
        shortDescription: 1,
        categories: 1,
        totalViews: 1,
        totalLikes: 1,
        totalComments: 1,
      })
      .sort({
        createdAt: -1,
      })
      .limit(10)
      .populate("categories", {
        name: 1,
        slug: 1,
      })
      .populate("postType", { name: 1, slug: 1 })
      .populate("author", { firstName: 1, lastName: 1, username: 1 });
    return res.status(200).json(posts);
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 */
const getTrendingPostByPostType = async (req, res) => {
  try {
    const posts = await PostModel.find({
      status: "active",
      postType: Types.ObjectId(req.params.postTypeId),
    })
      .select({
        title: 1,
        slug: 1,
        categories: 1,
        featuredImage: 1,
        shortDescription: 1,
        totalViews: 1,
        totalLikes: 1,
        totalComments: 1,
      })
      .sort({
        totalViews: -1,
        totalLikes: -1,
        totalComments: -1,
        totalShares: -1,
        createdAt: -1,
      })
      .limit(12)
      .populate("categories", {
        name: 1,
        slug: 1,
      });
    return res.status(200).json(posts);
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 */
module.exports = {
  getTopPicks,
  getTopAuthors,
  getLatestPostByPostType,
  getTrendingPostByPostType,
};
