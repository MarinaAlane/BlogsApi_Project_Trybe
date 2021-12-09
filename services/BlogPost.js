const { Category } = require('../models');

const createBlogPost = async (body) => {
  const allCategories = await Category.findAll();  
  const allCategoriesId = allCategories.map((category) => category.id);  
  console.log(body.categoryIds);
  const isThereCategory = body.categoryIds.every((category) => allCategoriesId.includes(category));
  if (!isThereCategory) {
    return ({ message: '"categoryIds" not found' });
  }

  return body;
};

module.exports = {
  createBlogPost,
};