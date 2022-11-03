const express = require("express"),
  router = express.Router();

const { DashboardController } = require("./../controllers");

router.get("/postviews", DashboardController.postViews);
router.get("/earnings", DashboardController.totalEarnings);
router.get("/posts", DashboardController.totalPosts);
router.get("/available-balance", DashboardController.availableBalance);
router.get("/admin/stats", DashboardController.getAdminDashboardInfo);

module.exports = router;
