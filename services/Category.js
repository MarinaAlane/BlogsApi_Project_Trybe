const { Category } = require('../models');

const createCategory = async (name) => {
  if (!name) {
    return ({ message: '"name" is required' });
  }

  return name;
};

const getCategories = async () => {
  const categories = await Category.findAll();  

  return categories;
};

module.exports = {
  createCategory,
  getCategories,
};