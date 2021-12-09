const service = require('../services/post');
const { created, ok } = require('../utils/codes');

const createPost = async (req, res) => {
  const post = req.body;
  const { id } = req.user;
  const newPost = await service.createPost(post, id);
  return res.status(created).json({ userId: id, ...newPost });
};

const getAllPosts = async (_req, res) => {
  const posts = await service.getAllPosts({ user: true, categories: true });
  console.log(posts);
  return res.status(ok).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const posts = await service.getPostById(id);
  return res.status(ok).json(posts);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};