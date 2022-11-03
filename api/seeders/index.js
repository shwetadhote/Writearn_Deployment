const categories = require("./Categories");
const postTypes = require("./PostTypes");

const seedDefaultDB = async () => {
  await postTypes();
  await categories();
};

module.exports = seedDefaultDB;
