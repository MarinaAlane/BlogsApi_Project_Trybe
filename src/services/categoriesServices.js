const { Categories } = require('../models');

const getAll = async () => {
  const allCategories = await Categories.findAll();
  return allCategories;
};

const newCategory = async (name) => {
    const category = await Categories.create({ name });
    return category;
};

 module.exports = { getAll, newCategory };