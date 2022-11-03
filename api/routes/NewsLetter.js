const express = require("express"),
  router = express.Router();

const { NewsLetterController } = require("./../controllers");

router.post("/", NewsLetterController.subscribeToNewsLetter);

module.exports = router;
