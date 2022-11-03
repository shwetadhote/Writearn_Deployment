const { CategoryModel, PostTypeModel } = require("./../models");
const PostTypes = require("./data/PostTypes.json");

const seedCategories = async () => {
  try {
    const categories = await CategoryModel.find();
    if (categories.length) {
      console.log(`${categories.length} categories are already added.`);
      return;
    }
    const Categories = [];
    for (let i = 0; i < PostTypes.length; i++) {
      const postType = PostTypes[i];

      const type = await PostTypeModel.findOne({ slug: postType.slug });
      const newCategories = postType.subCategories.map((cat) => ({
        ...cat,
        postType: type._id,
      }));
      Categories.push(...newCategories);
    }
    console.log(Categories);
    await CategoryModel.create(Categories);
    console.log(`${Categories.length} categories are created successfully!`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = seedCategories;
