const express = require("express"),
{ PasswordHelper } = require("./../helpers"),
    router = express.Router();

const { PayoutController } = require("./../controllers");

router.post(
    "/",
    PasswordHelper.validateLogin,
    PayoutController.sendMoneyToCreator
);
router.get(
    "/",
    PasswordHelper.validateLogin,
    PayoutController.getTransactions
);

module.exports = router;
