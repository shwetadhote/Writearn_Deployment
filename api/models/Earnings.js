const { Schema, model } = require("mongoose");

const EarningModal = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "post",
  },
  amount: {
    type: Schema.Types.Number,
    default: 0,
  },
  paidAmount: {
    type: Schema.Types.Number,
    default: 0,
  },
  earningDescription: String,
  views: {
    type: Schema.Types.Number,
    default: 0,
  },
  status: {
    type: Schema.Types.String,
    enum: ["paid", "unpaid", "partially paid"],
    default: "unpaid",
  },
  type: {
    type: Schema.Types.String,
    enum: ["bonus", "post"],
    default: "post",
  },
  createdIP: {
    type: Schema.Types.String,
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

module.exports = model("user_earning", EarningModal);
