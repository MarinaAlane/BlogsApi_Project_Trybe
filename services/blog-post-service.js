const { BlogPost } = require('../models');

const createPost = async ({ title, content, userId }) => BlogPost.create({
    title,
    content,
    userId,
  });

module.exports = {
  createPost,
};
