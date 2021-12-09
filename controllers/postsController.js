const posts = require('../services/posts');

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.dataValues.id;
  const { status, addPost, message } = await posts.createPost({ title, userId, content });
  if (message) { res.status(status).json({ message }); }
  return res.status(status).json(addPost);
};

const getPosts = async (req, res) => {
    const { status, allPosts } = await posts.getPosts();
    return res.status(status).json(allPosts);
  };

const getPostById = async (req, res) => {
    const { id } = req.params;
    const { status, postById, message } = await posts.getPostById(id);
    if (message) { res.status(status).json({ message }); }
    return res.status(status).json(postById);
  };

module.exports = { createPost, getPosts, getPostById };
