const { Categories } = require('../models');

const createCategory = async (name) => {
  const category = await Categories.create({ name });
  console.log('category.dataValues');
  return category;
};

module.exports = {
  createCategory,
};
