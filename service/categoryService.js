const { Categories } = require('../models');

const createCategory = async (name) => {
  const category = await Categories.create({ name });
  return category;
};

const getAllCategories = async () => {
  const categories = await Categories.findAll({ attributes: ['id', 'name'] });
  console.log(categories);
  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
};
