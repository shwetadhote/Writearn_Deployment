const { Schema, model, plugin } = require("mongoose"),
  slug = require("mongoose-slug-generator");

plugin(slug);

const CategorySchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  slug: {
    type: Schema.Types.String,
    unique: true,
    slug: "name",
  },
  parentCategory: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
  postType: {
    type: Schema.Types.ObjectId,
    ref: "post_type",
  },
  isActive: {
    type: Schema.Types.Boolean,
    default: false,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  createdIP: {
    type: Schema.Types.String,
    default: null,
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

module.exports = model("category", CategorySchema);
