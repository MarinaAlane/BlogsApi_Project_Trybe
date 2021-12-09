const { Category } = require('../models');

const err = (statusCode) => ({ statusCode });

const validationName = (name) => {
  if (!name) throw err({ statusCode: 400, message: '"name" is required' });
};

const insertCategorie = async (name) => {
  const result = await Category.create({ name });
  return result;
};

const validationCategories = async (name) => {
  validationName(name);
  const result = await insertCategorie(name);
  return result;
};

module.exports = {
  validationCategories,
};
