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

const getAllCategories = async () => {
  try {
    const categories = await Category.findAll();
    return categories.map((element) => element.dataValues).sort((a, b) => a.id - b.id);
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  registerCategory,
  getAllCategories,
};