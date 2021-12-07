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

module.exports = {
  createCategory,
  validateName,
};
