const error = require('../errorCreator');

const newCategory = (payload) => {
  if (!payload.name) throw error('newCategoryError');
};

const categoryExists = (payload) => {
  if (!payload) throw error('categoryExistsError');
};

module.exports = {
  newCategory,
  categoryExists,
};
