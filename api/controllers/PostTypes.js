const { PostTypeModel, CategoryModel } = require("./../models"),
  { ErrorHelper } = require("./../helpers");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getPostTypes = async (req, res) => {
  try {
    // const postTypes = await PostTypeModel.find().sort({ name: 1 });

    const postTypes = await PostTypeModel.aggregate([
      {
        $lookup: {
          from: "posts",
          as: "posts",
          foreignField: "postType",
          localField: "_id",
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          slug: 1,
          lastUpdatedAt: 1,
          totalPosts: { $size: "$posts" },
        },
      },
      {
        $sort: {
          lastUpdatedAt: -1,
          totalPosts: -1,
        },
      },
    ]);
    return res.status(200).json(postTypes);
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getCategoriesByPostId = async (req, res) => {
  try {
    const postTypes = await CategoryModel.find({
      postType: req.params.id,
    }).sort({ name: 1 });
    return res.status(200).json(postTypes);
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const postTypeDetails = async (req, res) => {
  try {
    const postType = await PostTypeModel.findOne({
      slug: req.params.slug,
    }).sort({ name: 1 });
    return res.status(200).json(postType);
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 */
module.exports = {
  getPostTypes,
  getCategoriesByPostId,
  postTypeDetails,
};
