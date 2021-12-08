const service = require('../services/post');
const { created } = require('../utils/codes');

const createPost = async (req, res) => {
  const post = req.body;
  const { id } = req.user;
  const newPost = await service.createPost(post, id);
  return res.status(created).json({ userId: id, ...newPost });
};

module.exports = {
  createPost,
};