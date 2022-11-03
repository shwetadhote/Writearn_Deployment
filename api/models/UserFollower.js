const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const UserModel = require("./User");

const FollowerSchema = new Schema({
    followeeId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "users",
    },
    followerId: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    isFollowing: {
        type: Schema.Types.Boolean,
        default: false,
    },
    createdAt: {
        type: Schema.Types.Date,
        default: Date.now,
    },
})
FollowerSchema.post("save", async function () {
    const followeeId = this.followeeId;
    const result = await UserModel.updateOne(
        {
            _id: followeeId,
        },
        {
            $inc: {
                totalFollowers: 1,
            },
        }
    );
});
FollowerSchema.post("updateOne", async function () {
    const followeeId = this._conditions.followeeId;
    const totalFollowers = await mongoose.models["follower"].countDocuments({ followeeId, isFollowing: true });
    const result = await UserModel.updateOne(
        {
            _id: followeeId,
        },
        {
            $set: {
                totalFollowers
            },
        }
    );
});
module.exports = model("follower", FollowerSchema);
