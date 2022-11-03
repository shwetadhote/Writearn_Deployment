const express = require("express"),
  { PasswordHelper, UploadHelper } = require("../helpers"),
  router = express.Router();

const { AuthController } = require("./../controllers");
const passport = require("passport");

/* routes for end users */
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/me", PasswordHelper.validateLogin, AuthController.profile);
router.post("/forgot-password", AuthController.forgotPassword);
router.post(
  "/recover-password-link-verification",
  AuthController.recoverPasswordLinkVerification
);
router.post("/reset-password", AuthController.userResetPassword);
router.get(
  "/profile",
  PasswordHelper.validateUnAuthorizedLogin,
  AuthController.getFrontendUserDetails
);
router.get(
  "/refresh-token",
  PasswordHelper.validateLogin,
  AuthController.refreshToken
);
router.get(
  "/validate-username",
  PasswordHelper.validateLogin,
  AuthController.checkUsername
);
router.post(
  "/update-profile",
  PasswordHelper.validateLogin,
  UploadHelper.single("profileImage"),
  AuthController.updateProfileDetails
);
router.get(
  "/userportal/login-request",
  PasswordHelper.validateLogin,
  AuthController.loginToUserPortal
);
router.get(
  "/login-request-verification",
  PasswordHelper.validateLogin,
  AuthController.verifyLoginToUserPortalReq
);
router.get(
  "/facebook-login",
  passport.authenticate("facebook", { scope: ["public_profile", "email"] })
);
router.get(
  "/facebook-login/callback",
  passport.authenticate("facebook", {
    successRedirect: "/api/v1/auth/logged-in",
    failureRedirect: "/api/v1/auth/fail",
    session: false,
  })
);

/* End user's routes ends */

/* Admin routes starts */
router.post("/admin/login", AuthController.loginAsAdmin);
router.get(
  "/admin/refresh-token",
  PasswordHelper.validateLogin,
  PasswordHelper.validateAdminLogin,
  AuthController.refreshToken
);
router.get(
  "/admin/me",
  PasswordHelper.validateLogin,
  PasswordHelper.validateAdminLogin,
  AuthController.profile
);
router.get(
  "/admin/proxy-login-request",
  PasswordHelper.validateLogin,
  PasswordHelper.validateAdminLogin,
  AuthController.proxyLoginToUserAccount
);
/* Admin routs ends */

module.exports = router;
