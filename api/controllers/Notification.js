const { NotificationModel } = require("../models");

const addNewNotification = async ({
  userId,
  title,
  content,
  type,
  redirectionURL,
}) => {
  const notificationData = new NotificationModel({
    userId,
    title,
    content,
    type,
    redirectionURL,
  });
  const newNotification = await notificationData.save();
  return newNotification;
};

module.exports = {
  addNewNotification,
};
