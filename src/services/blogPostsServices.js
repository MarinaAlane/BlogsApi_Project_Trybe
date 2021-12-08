const { BlogPosts, Categories, Users } = require('../models');
const { validateCategories } = require('../middlewares/validations');

const createBlogPost = async ({ title, categoryIds, content }) => {
  const validCatIds = await validateCategories(categoryIds);
  if (validCatIds) {
    const blogPost = await BlogPosts.create({ userId: 1, title, content });
    return blogPost;
  }
};

const getAllPosts = async () => {
    const Posts = await BlogPosts.findAll({
      include: [
        { model: Categories, as: 'categories', through: { attributes: [] },
      }, {
        model: Users, as: 'user',
      }],
    });
    return Posts;
};

const findPostById = async (id) => {
  const postById = await BlogPosts.findByPk(id, {
    include: [
      { model: Categories, as: 'categories', through: { attributes: [] },
    }, {
      model: Users, as: 'user',
    }],
  });
  return postById;
};

module.exports = { createBlogPost, validateCategories, getAllPosts, findPostById };