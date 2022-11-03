const express = require("express"),
  router = express.Router();

const { PostTypeController } = require("./../controllers");

router.get("/", PostTypeController.getPostTypes);
router.get("/:slug", PostTypeController.postTypeDetails);
router.get("/category/:id", PostTypeController.getCategoriesByPostId);

module.exports = router;
