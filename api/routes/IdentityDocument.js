const express = require("express"),
  { UploadHelper, PasswordHelper } = require("../helpers");
router = express.Router();

const { IdentityDocumentController } = require("../controllers");

router.get(
  "/",
  PasswordHelper.validateLogin,
  IdentityDocumentController.fetchUploadedIdentityDocument
);
router.post(
  "/",
  PasswordHelper.validateLogin,
  UploadHelper.any([{ name: "frontImage" }, { name: "backImage" }]),
  IdentityDocumentController.addVerificationDocument
);
router.get(
  "/all",
  PasswordHelper.validateAdminLogin,
  IdentityDocumentController.getIDVerificationRequest
);

router.put(
  "/update-status",
  PasswordHelper.validateAdminLogin,
  IdentityDocumentController.updateVerificationStatus
);

router.put(
  "/",
  PasswordHelper.validateLogin,
  UploadHelper.any([{ name: "frontImage" }, { name: "backImage" }]),
  IdentityDocumentController.updateVerificationDocument
);

module.exports = router;
