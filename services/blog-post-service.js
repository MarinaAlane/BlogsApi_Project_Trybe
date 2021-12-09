const { BlogPost, User, Category } = require('../models');

const createPost = async ({ title, content, userId }) => BlogPost.create({
    title,
    content,
    userId,
  });

  const listAllPosts = async () => BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'User',
        attributes: {
          exclude: ['password'],
        },
      },
      {
        model: Category,
        as: 'Categories',
        through: { attributes: [] },
        attributes: { exclude: ['PostsCategories'] },
      },
    ],
  });

module.exports = {
  createPost,
  listAllPosts,
};
