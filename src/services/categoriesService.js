const { Category } = require('../models');

const creatingCategory = async (category) => {
  const { name } = category;
  await Category.create(category);
  const newCategory = await Category.findOne({ where: { name } });
  return newCategory;
};

const gettingAllCategories = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = {
  creatingCategory,
  gettingAllCategories,
};