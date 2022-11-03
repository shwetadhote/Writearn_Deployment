const cron = require("node-cron"),
  email = require("./email"),
  generateSiteMap = require("./sitemap-generator");
const { JobQueueModel } = require("../models");

const processJobQueue = () => {
  // running cron every 10 seconds to process the JobQueue
  cron.schedule("*/10 * * * * *", async () => {
    const job = await JobQueueModel.findOne({
      status: "pending",
    }).sort({ createdAt: 1 });
    if (!job) {
      console.log("Nothing is in JobQueue to process.");
      return;
    }
    job.startedAt = Date.now();
    job.status = "in-progress";
    await job.save();
    switch (job.type) {
      case "email":
        await email(job);
        break;

      default:
        break;
    }
    job.completedAt = Date.now();
    job.status = "completed";
    await job.save();
  });
};
// run cron only if app is running in production mode
if (process.env.NODE_ENV === "production") {
  // process queue
  processJobQueue();
  // generate sitemap on regular interval
  generateSiteMap();
}
