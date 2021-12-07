const { BlogPosts, Categories } = require('../models');

const validateCategories = async (categoryIds) => {
  const categories = await Categories.findAll();
  const categoriesArray = categories.map((category) => category.id);
  const Ids = categoryIds.every((ids) => categoriesArray.includes(ids));
 // console.log(categoriesArray);
  return Ids;
};

const createBlogPost = async ({ title, categoryIds, content }) => {
  const validCatIds = await validateCategories(categoryIds);
  if (validCatIds) {
    const blogPost = await BlogPosts.create({ userId: 1, title, content });
    return blogPost;
  }
};

module.exports = { createBlogPost, validateCategories };