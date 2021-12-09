const service = require('../services/post');
const { created, ok, notFound } = require('../utils/codes');
const { nonexistent } = require('../utils/errMsg');

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
  const post = await service.getPostById(id, { user: true, categories: true });
  return post ? res.status(ok).json(post) : res.status(notFound).json(nonexistent('Post'));
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};