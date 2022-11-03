const mongoose = require("mongoose");
const { Schema, model } = mongoose
const PostModel = require("./Post");
const PostLikeSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: "posts",
  },
  isLiked: {
    type: Schema.Types.Boolean,
    default: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  createdIP: {
    type: Schema.Types.String,
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});
PostLikeSchema.post("remove", async function () {
  let updateData = {};
  if (this.isLiked) {
    updateData = {
      $inc: {
        totalLikes: -1,
      },
    };
  } else {
    updateData = {
      $inc: {
        totalDislikes: -1,
      },
    };
  }
  await PostModel.updateOne(
    {
      _id: this.postId,
    },
    updateData
  );

});
PostLikeSchema.post("save", async function () {
  let updateData = {};
  if (this.isLiked) {
    updateData = {
      $inc: {
        totalLikes: 1,
      },
    };
  } else {
    updateData = {
      $inc: {
        totalDislikes: 1,
      },
    };
  }
  await PostModel.updateOne(
    {
      _id: this.postId,
    },
    updateData
  );
});
PostLikeSchema.post("updateOne", async function () {
  const postId = this._conditions.postId;
  const totalLikes = await mongoose.models["post_likes"].countDocuments({ postId, isLiked: true });
  const totalDislikes = await mongoose.models["post_likes"].countDocuments({ postId, isLiked: false });
  await PostModel.updateOne(
    {
      _id: postId,
    },
    {
      $set: {
        totalLikes,
        totalDislikes
      }
    }
  );
});
module.exports = model("post_likes", PostLikeSchema);
