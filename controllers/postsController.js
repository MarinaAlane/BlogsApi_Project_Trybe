const posts = require('../services/posts');

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.dataValues.id;
  const { status, addPost, message } = await posts.createPost({ title, userId, content });
  if (message) { res.status(status).json({ message }); }
  return res.status(status).json(addPost);
};

module.exports = { createPost };
