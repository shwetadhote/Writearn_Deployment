const { ErrorHelper } = require("./../helpers");
const { CategoryModel } = require("../models");

const parentCategoryLIst = async (req, res) => {
  try {
    const category = await CategoryModel.find({ parentCategory: null });
    res.status(200).json(category);
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};

const categoryList = async (req, res) => {
	try {
    const category = await CategoryModel.find({});
		res.status(200).json(category);
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
}
module.exports = {
	parentCategoryLIst,
	categoryList
};
