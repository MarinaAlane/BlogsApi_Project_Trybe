const { Category } = require('../models');

const validateName = (name) => {
  if (!name) {
    return {
      error: {
        code: 400,
        message: '"name" is required',
      },
    };
  }

  return true;
};

const createCategory = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const getCategories = async () => {
  const categories = await Category.findAll();

  if (categories.length < 1) {
    return {
      error: {
        code: 404,
        message: '"categories" not found',
      },
    };
  }

  return categories;
};

module.exports = {
  createCategory,
  validateName,
  getCategories,
};
