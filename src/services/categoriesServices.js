const { Categories } = require('../models');

const getAll = async () => {
  const allCategories = await Categories.findAll();
  return allCategories;
};

 module.exports = { getAll };