const error = require('../utils/errorTemplates');

const createCategory = (payload) => {
  if (!payload.name) {
    throw error('newCategoryError');
  }
};

const categoryExists = (payload) => {
  if (!payload) {
    throw error('categoryExistsError');
  }
};

module.exports = {
  createCategory,
  categoryExists,
};
