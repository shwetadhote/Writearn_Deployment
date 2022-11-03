const express = require("express"),
  router = express.Router();

const { ContactUsController } = require("./../controllers");

router.post("/", ContactUsController.addContactUs);

module.exports = router;
