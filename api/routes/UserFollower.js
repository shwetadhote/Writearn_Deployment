const express = require("express"),
  router = express.Router(),
  { PasswordHelper } = require("./../helpers"),
  { UserFollowerController } = require("./../controllers");

router.post("/", PasswordHelper.validateLogin,UserFollowerController.saveFollowingStatus);
router.get("/:userId", UserFollowerController.getFollowersByUserId);


module.exports = router;
