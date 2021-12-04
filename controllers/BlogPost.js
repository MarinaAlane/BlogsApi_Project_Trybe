const { BlogPost } = require('../services');

const createPost = async (req, res, next) => {
  const { body, user } = req;
  const { title, content, categoryIds } = body;
  const userId = user.id;

  try {
    const newPost = await BlogPost.createPost({ title, content, categoryIds, userId });

    return res.status(201).json(newPost);
  } catch (error) {
    return next(error);
  }
};

const getAllPosts = async (_req, res, next) => {
  try {
    const posts = await BlogPost.getAllPosts();

    return res.status(200).json(posts);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createPost,
  getAllPosts,
};
