const express = require("express"),
{ PasswordHelper } = require("./../helpers"),
  router = express.Router();

const { PayoutMethodsController } = require("./../controllers");

router.get("/",PasswordHelper.validateLogin, PayoutMethodsController.getPayoutMethods);
router.post("/",PasswordHelper.validateLogin, PayoutMethodsController.addPayoutMethod);
router.patch("/activate/:accountId",PasswordHelper.validateLogin, PayoutMethodsController.activateAccount);
router.patch(
  "/deactivate/:accountId",
  PasswordHelper.validateLogin,
  PayoutMethodsController.deactivateAccount
);

module.exports = router;
