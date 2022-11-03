const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const PostModel = require("./Post");

const PostCommentSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: "posts",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  comment: {
    type: Schema.Types.String,
    required: true,
  },
  createdIP: {
    type: Schema.Types.String,
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

PostCommentSchema.post("save", async function () {
    let updateData = {};
    updateData = {
        $inc: {
            totalComments: 1,
        },
    };
    await PostModel.updateOne(
        {
            _id: this.postId,
        },
        updateData
    );
});

module.exports = model("post_comments", PostCommentSchema);