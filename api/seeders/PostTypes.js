const { PostTypeModel } = require("./../models");
const PostTypes = require("./data/PostTypes.json");
/**
 *
 */
const seedPostTypes = async () => {
  try {
    const postTypes = await PostTypeModel.find();
    if (postTypes.length) {
      console.log(`${postTypes.length} post types are already added.`);
      return;
    }
    await PostTypeModel.create(PostTypes);
    console.log(`${PostTypes.length} post types are created successfully!`);
  } catch (error) {}
};
/**
 *
 */
module.exports = seedPostTypes;
