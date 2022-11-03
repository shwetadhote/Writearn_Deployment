const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  firstName: {
    type: Schema.Types.String,
    required: true,
  },
  lastName: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  username: {
    type: Schema.Types.String,
  },
  profileImage: {
    type: Schema.Types.String,
  },
  gender: {
    type: Schema.Types.String,
    enum: ["male", "female", "other"],
  },
  phoneNumber: {
    type: Schema.Types.String,
  },
  address: {
    type: Schema.Types.String,
  },
  state: {
    type: Schema.Types.String,
  },
  city: {
    type: Schema.Types.String,
  },
  pincode: {
    type: Schema.Types.Number,
  },
  about: {
    type: Schema.Types.String,
  },
  status: {
    type: Schema.Types.String,
    enum: ["active", "inactive", "banned", "blocked"],
    default: "active",
  },
  isVerified: {
    type: Schema.Types.Boolean,
    default: false,
  },
  totalFollowers: {
    type: Schema.Types.Number,
    default: 0,
  },
  totalPosts: {
    type: Schema.Types.Number,
    default: 0,
  },
  razorPayContactId: {
    type: Schema.Types.String,
  },
  isDeleted: {
    type: Schema.Types.Boolean,
    default: false,
  },
  isSocial: {
    type: Schema.Types.Boolean,
    default: false,
  },
  userType: {
    type: Schema.Types.String,
    required: true,
    enum: ["guest", "creator", "admin"],
    default: "guest",
  },
  resetPasswordToken: {
    type: Schema.Types.String,
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
  createdIP: {
    type: Schema.Types.String,
  },
});

module.exports = model("users", UserSchema);
