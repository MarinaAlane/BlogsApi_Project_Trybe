const { Categories } = require('../models');

const createBlogPost = async (body) => {
  const allCategories = await Categories.findAll();
  const isThereCategory = allCategories.some((category) => category.id === body.categoryIds);
  if (!isThereCategory) {
    return ({ message: '"categoryIds" not found' });
  }

  return body;
};

module.exports = {
  createBlogPost,
};