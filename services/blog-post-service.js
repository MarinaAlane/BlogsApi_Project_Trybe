const { BlogPost, user, categories } = require('../models');

const createPost = async ({ title, content, userId }) => BlogPost.create({
    title,
    content,
    userId,
  });

  const listAllPosts = async () => BlogPost.findAll({
    include: [
      {
        model: user,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      },
      {
        model: categories,
        as: 'categories',
        through: { attributes: [] },
        attributes: { exclude: ['PostsCategories'] },
      },
    ],
  });

module.exports = {
  createPost,
  listAllPosts,
};
