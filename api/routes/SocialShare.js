const express = require("express"),
  router = express.Router();


router.get("/", SocialShareController.socialShare);

module.exports = router;
