const { Category } = require('../models');

const creatingCategory = async (category) => {
  const { name } = category;
  await Category.create(category);
  const newCategory = await Category.findOne({ where: { name } });
  return newCategory;
};

module.exports = {
  creatingCategory,
};