const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const NotificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "users" },
  isRead: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  redirectionURL: {
    type: String,
  },
  type: {
    type: String,
    enum: ["info", "warning", "success"],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = model("notification", NotificationSchema);
