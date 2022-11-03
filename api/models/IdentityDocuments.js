const { Schema, model } = require("mongoose");

const IdentityDocumentModel = new Schema({
  type: {
    type: Schema.Types.String,
  },
  userId: {
    type: Schema.Types.String,
    ref: "users",
  },
  status: {
    type: Schema.Types.String,
    enum: ["approved", "rejected", "pending"],
  },
  frontImage: {
    type: Schema.Types.String,
  },
  backImage: {
    type: Schema.Types.String,
  },
  note: {
    type: Schema.Types.String,
  },
  expirationDate: {
    type: Schema.Types.Date,
    isRequired: false,
    default: null,
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

module.exports = model("identity_documents", IdentityDocumentModel);
