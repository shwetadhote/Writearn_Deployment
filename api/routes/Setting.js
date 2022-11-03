const { SettingController } = require("../controllers");

const express = require("express"),
  router = express.Router();

router.get("/", SettingController.getSettings);
router.post("/update", SettingController.updateSettings);

module.exports = router;
