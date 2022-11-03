const express = require("express"),
    { PasswordHelper } = require("./../helpers"),
    router = express.Router();

const { EarningsController } = require("./../controllers");

router.get("/", PasswordHelper.validateLogin, EarningsController.fetchUserEarnings);
router.post("/bonus", PasswordHelper.validateAdminLogin, EarningsController.addBonus);

module.exports = router;
