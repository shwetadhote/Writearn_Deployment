const { Schema, model } = require("mongoose");

const JobQueueSchema = new Schema({
  type: {
    type: Schema.Types.String,
    enum: ["email", "notification"],
  },
  data: {
    type: Schema.Types.Mixed,
  },
  status: {
    type: Schema.Types.String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
  startedAt: {
    type: Schema.Types.Date,
  },
  completedAt: {
    type: Schema.Types.Date,
  },
});

module.exports = model("job_queue", JobQueueSchema);
