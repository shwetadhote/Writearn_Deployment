const { Schema, model } = require("mongoose");
const PostModel = require("./Post");
const PostViewsSchema = new Schema({
    postId: {
        type: Schema.Types.ObjectId,
        ref: "posts",
    },
    viewCount: {
        type: Schema.Types.Number,
        default: 0,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    amountEarned: {
        type: Schema.Types.Number,
        default: 0,
      },
    createdIP: {
        type: Schema.Types.String,
    },
    createdAt: {
        type: Schema.Types.Date,
        default: Date.now,
    },
    lastUpdatedIP: {
        type: Schema.Types.String,
    },
    lastUpdatedAt: {
        type: Schema.Types.Date,
        default: Date.now,
    },
});
PostViewsSchema.post("updateOne", async function () {
    const postId = this._conditions.postId;
    await PostModel.updateOne(
        {
            _id: postId,
        },
        {
            $inc: {
                totalViews: 1,
            },
        }
    );
});
PostViewsSchema.post("save", async function () {
    let updateData = {};
    updateData = {
        $inc: {
            totalUniqueViews: 1,
            totalViews: 1,
        },
    };
    await PostModel.updateOne(
        {
            _id: this.postId,
        },
        updateData
    );
});
module.exports = model("post_views", PostViewsSchema);
