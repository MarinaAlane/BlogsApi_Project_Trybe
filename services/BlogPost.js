const { Category, BlogPost, User } = require('../models');

const createBlogPost = async (body) => {
  const allCategories = await Category.findAll();  
  const allCategoriesId = allCategories.map((category) => category.id);  

  const isThereCategory = body.categoryIds.every((category) => allCategoriesId.includes(category));
  if (!isThereCategory) {
    return ({ message: '"categoryIds" not found' });
  }

  return body;
};

const getBlogPosts = async () => {
  const blogPosts = await BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } }, 
  ], 
  });

  return blogPosts;
};

module.exports = {
  createBlogPost,
  getBlogPosts,
};