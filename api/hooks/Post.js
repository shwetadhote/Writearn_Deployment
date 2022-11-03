const PostType = require("../models/PostType");
const UserModel = require("../models/User");
/**
 *
 * @param {*} next
 */
const addFindCondition = function (next) {
  let conditions = this.getQuery();
  const defaultCondition = [
    {
      isDeleted: {
        $exists: false,
      },
    },
    {
      isDeleted: false,
    },
  ];
  if (conditions.$or) {
    if (conditions.$and) {
      conditions.$and.push(...defaultCondition);
    } else {
      conditions.$and = [{ $or: conditions.$or }, { $or: defaultCondition }];
    }
  } else {
    conditions.$or = defaultCondition;
  }
  this._conditions = conditions; // Set the new conditions
  next();
};
/**
 * Increase the counter of total posts when new post created by user
 */
const increasePostCounter = async function () {
  try {
    let result = await UserModel.updateOne(
      {
        _id: this.author,
      },
      {
        $inc: {
          totalPosts: 1,
        },
      }
    );
    await PostType.updateOne(
      {
        _id: this.postType,
      },
      {
        $set: {
          lastUpdatedAt: Date.now(),
        },
      }
    );
    console.log(`increasing the post counter for author success!`, result);
  } catch (error) {
    console.log(`Error occured in increasing the post counter!`, error);
  }
};
/**
 * decrease counter of the total posts whenever post is delete of the user
 *
 * @param {*} authorId
 */
const decreaseByAuthorId = async (authorId) => {
  try {
    await UserModel.updateOne(
      {
        _id: authorId,
      },
      {
        $inc: {
          totalPosts: -1,
        },
      }
    );
    console.log(`decreasing the post counter for author success!`);
  } catch (error) {
    console.log(`Error occured in decreasing the post counter!`);
  }
};
/**
 * decrease post counter
 */
const decreasePostCounter = async function () {
  await decreaseByAuthorId(this.author);
};
/**
 * update post counter
 */
const updatePostCounter = async function () {
  if (this.isDeleted) {
    await decreaseByAuthorId(this.author);
  }
};
/**
 *
 */
module.exports = {
  addFindCondition,
  increasePostCounter,
  decreasePostCounter,
  updatePostCounter,
};
