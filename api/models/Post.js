const { Schema, model, plugin } = require("mongoose"),
  slug = require("mongoose-slug-generator");
const { PostHooks } = require("../hooks");

// plugin(slug);
const PostSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  slug: {
    type: Schema.Types.String,
    unique: true,
    // slug: "title",
  },
  shortDescription: {
    type: Schema.Types.String,
  },
  description: {
    type: Schema.Types.Mixed,
    required: true,
  },
  postType: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "post_type",
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
  ],
  featuredImage: {
    type: Schema.Types.String,
    required: true,
  },
  tags: [
    {
      type: Schema.Types.String,
    },
  ],
  status: {
    type: Schema.Types.String,
    enum: ["active", "pending", "rejected", "re-submitted"],
  },
  note: {
    type: Schema.Types.String
  },
  excerpt: {
    type: Schema.Types.String,
  },
  socialMediaImage: {
    type: Schema.Types.String,
  },
  statusUpdate: [
    new Schema({
      status: {
        type: Schema.Types.String,
        required: true,
      },
      message: {
        type: Schema.Types.String,
      },
      updatedAt: {
        type: Schema.Types.Date,
        default: Date.now,
      },
    }),
  ],
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  totalUniqueViews: {
    type: Schema.Types.Number,
    default: 0,
  },
  totalViews: {
    type: Schema.Types.Number,
    default: 0,
  },
  totalLikes: {
    type: Schema.Types.Number,
    default: 0,
  },
  totalDislikes: {
    type: Schema.Types.Number,
    default: 0,
  },
  totalComments: {
    type: Schema.Types.Number,
    default: 0,
  },
  totalShares: {
    type: Schema.Types.Number,
    default: 0,
  },
  isBannedFromTrending: {
    type: Schema.Types.Boolean,
    default: false,
  },
  createdIP: {
    type: Schema.Types.String,
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
  updated: [
    new Schema({
      ip: {
        type: Schema.Types.String,
        required: true,
      },
      date: {
        type: Schema.Types.Date,
        default: Date.now,
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    }),
  ],
  isDeleted: {
    type: Schema.Types.Boolean,
    default: false,
  },
});

PostSchema.pre("findOne", PostHooks.addFindCondition);
PostSchema.pre("find", PostHooks.addFindCondition);
PostSchema.pre("findOneAndRemove", PostHooks.addFindCondition);
PostSchema.pre("findOneAndUpdate", PostHooks.addFindCondition);
PostSchema.pre("count", PostHooks.addFindCondition);
PostSchema.pre("countDocuments", PostHooks.addFindCondition);
PostSchema.post("save", PostHooks.increasePostCounter);
PostSchema.post("insertMany", PostHooks.increasePostCounter);
PostSchema.post("deleteOne", PostHooks.decreasePostCounter);
PostSchema.post("deleteMany", PostHooks.decreasePostCounter);
PostSchema.post("updateOne", PostHooks.updatePostCounter);

module.exports = model("post", PostSchema);
