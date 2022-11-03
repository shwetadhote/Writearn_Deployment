const cashfreeWebhookHandler = async (req, res) => {
  return res.json({
    body: req.body,
    message: "Webhook success",
  });
};

module.exports = {
  cashfreeWebhookHandler,
};
