const { Categories } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Categories.create({ name });
  return { status: 201, data: newCategory };
};

module.exports = {
  createCategory,
};
