const { Categories } = require('../models');

const createCategories = async (name) => {
  const categories = await Categories.create(name);
  return categories;
};

const getCategories = async () => {
  const categories = await Categories.findAll();
  return categories;
};

module.exports = {
  createCategories,
  getCategories,
};