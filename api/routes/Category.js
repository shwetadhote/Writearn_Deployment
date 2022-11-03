const express = require("express"),
  router = express.Router();

const { CategoryController } = require("./../controllers");

router.get("/parent", CategoryController.parentCategoryLIst);
router.get("/", CategoryController.categoryList);

module.exports = router;
