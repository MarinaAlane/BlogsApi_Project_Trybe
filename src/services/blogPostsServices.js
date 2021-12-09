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

const findPostId = async (id) => {
  const postById = await BlogPosts.findByPk(id, {
    include: [
      { model: Categories, as: 'categories', through: { attributes: [] },
    }, {
      model: Users, as: 'user',
    }],
  });
  return postById;
};

const updatePost = async (id, title, content) => {
  await BlogPosts.update({ title, content }, { where: { id } });
  return findPostId(id);
};

const deletePost = async (id) => {
  const postDeleted = await BlogPosts.destroy({ where: { id } });
  return postDeleted;
};

module.exports = { createBlogPost, 
  validateCategories,
getAllPosts,
findPostId,
updatePost,
deletePost };