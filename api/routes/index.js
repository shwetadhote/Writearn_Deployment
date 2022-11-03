const { PasswordHelper, UploadHelper } = require("../helpers");

const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "API server is working fine!",
  });
});
/**
 *
 */
router.use("/auth", require("./Auth"));
/**
 *
 */
router.use("/post-types", require("./PostTypes"));
/**
 *
 */
router.use("/post", require("./Post"));
/**
 *
 */
router.use("/homepage", require("./Homepage"));
/**
 *
 */
router.use(
  "/settings",
  PasswordHelper.validateLogin,
  PasswordHelper.validateAdminLogin,
  require("./Setting")
);
/**
 *
 */
router.post("/upload-image", UploadHelper.single("image"), (req, res) =>
  res.status(200).json({
    success: 1,
    file: {
      url: req.body.url || `${process.env.FILE_ENDPOINT}${req.file.filename}`,
    },
  })
);
/**
 *
 */
router.use(
  "/payout-methods",
  PasswordHelper.validateLogin,
  require("./PayoutMethods")
);
/**
 *
 */
router.use("/payout", PasswordHelper.validateLogin, require("./Payout"));
/**
 *
 */
router.use("/dashboard", PasswordHelper.validateLogin, require("./Dashboard"));
/**
 *
 */
router.use("/earnings", require("./Earnings"));

/**
 *
 */
router.use("/user", PasswordHelper.validateLogin, require("./User"));
/**
 *
 */
router.use("/category", require("./Category"));
/**
 *
 */
router.use("/newsletter", require("./NewsLetter"));
/**
 *
 */
router.use("/contact-us", require("./ContactUs"));
/**
 *
 */
router.use("/follow", require("./UserFollower"));

/**
 *
 */
router.use("/identity-document", require("./IdentityDocument"));

module.exports = router;
