const express = require("express"),
  router = express.Router(),
  { PasswordHelper } = require("./../helpers"),
  { UserController } = require("./../controllers");

router.get("/", UserController.userList);
router.get(
  "/admin/:id",
  PasswordHelper.validateAdminLogin,
  UserController.userDetailsByAdmin
);
router.get("/:id", UserController.userDetails);
router.patch(
  "/:id/update-verification-status",
  UserController.updateUserVerificationStatus
);

router.patch("/:id/ban-user", UserController.banUser);
module.exports = router;
