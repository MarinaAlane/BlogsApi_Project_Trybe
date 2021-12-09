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

const getIds = async () => {
  try {
    const categories = await Category.findAll({
      attributes: ['id'],
    });
    return categories.map((element) => element.dataValues).sort((a, b) => a.id - b.id);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getCategoryById = async (id) => {
  try {
    const category = await Category.findOne({
      where: {
        id,
      },
    });
    return category.dataValues;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  registerCategory,
  getAllCategories,
  getCategoryById,
  getIds,
};