const { Schema, model } = require("mongoose");

const PayoutSchema = new Schema({
  transactionId: {
    type: Schema.Types.String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  invoiceNumber: {
    type: Schema.Types.String,
    // required: true,
  },
  amount: {
    type: Schema.Types.Number,
    required: true,
  },
  remainingBalance: {
    type: Schema.Types.Number,
  },
  paymentId: {
    type: Schema.Types.String,
  },
  payoutInformation: {
    type: Schema.Types.Mixed,
  },
  payoutStatus: {
    type: Schema.Types.String,
    enum: ["requested", "rejected", "paid", "failed"],
    default: "requested",
  },
  createdIP: {
    type: Schema.Types.String,
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

module.exports = model("payout", PayoutSchema);
