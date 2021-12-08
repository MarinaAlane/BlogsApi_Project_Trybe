const { Category } = require('../models');

const registerCategory = async (name) => {
  try {
    const { dataValues: newCategory } = await Category.create({ name });
    return newCategory;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  registerCategory,
};