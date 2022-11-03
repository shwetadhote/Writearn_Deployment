const { Schema, model } = require("mongoose");

const PostTypeSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  slug: {
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
  lastUpdatedAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

module.exports = model("post_type", PostTypeSchema);
