const { HomepageController } = require("../controllers");

const express = require("express"),
  router = express.Router();

router.get("/top-picks", HomepageController.getTopPicks);
router.get("/top-authors", HomepageController.getTopAuthors);
router.get(
  "/latest-post/:postTypeId",
  HomepageController.getLatestPostByPostType
);
router.get(
  "/trending-post/:postTypeId",
  HomepageController.getTrendingPostByPostType
);
module.exports = router;
