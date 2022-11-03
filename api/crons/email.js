const { EmailHelper, ErrorHelper } = require("../helpers");

const sendEmailFromQueue = async (job) => {
  try {
    const email = await new EmailHelper.Email()
      .setBody(job.data.body, job.data.templateName, job.data.replaceObject)
      .setSubject(job.data.subject)
      .sendEmail(job.data.to);
  } catch (error) {
    ErrorHelper.createError(error);
  }
};

module.exports = sendEmailFromQueue;
