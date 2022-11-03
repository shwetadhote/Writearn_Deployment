const { Schema, model } = require("mongoose");

const SettingModel = new Schema({
  key: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  value: {
    type: Schema.Types.Mixed,
    required: true,
  },
  createdIP: {
    type: Schema.Types.String,
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

module.exports = model("setting", SettingModel);
