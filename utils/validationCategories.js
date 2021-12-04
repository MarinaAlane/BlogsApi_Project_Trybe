const { Category } = require('../models');

const err = (statusCode) => ({ statusCode });

const validationName = (name) => {
  if (!name || name !== 'string') throw err({ statusCode: 400, message: '"name" is required' });
};

const insertCategorie = async (name) => {
  const result = await Category.create({ name });
  return result;
};

const validationCategories = (name) => {
  validationName(name);
  insertCategorie(name);
};

module.exports = {
  validationCategories,
};
