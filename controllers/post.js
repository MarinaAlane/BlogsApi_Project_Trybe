const Post = require('../services/post');

const create = async (req, res) => {
  const { title, content } = req.body;
  const { userId } = req;
  const { dataValues } = await Post.create({ title, content, userId });
  
  delete dataValues.updated;
  delete dataValues.published;
  res.status(201).json(dataValues);
};

const findAll = async (_req, res) => {
  const allPosts = await Post.findAll();
  res.status(200).json(allPosts);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const user = await Post.findById(id);

  if (!user) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  res.status(200).json(user);
};

module.exports = {
  create,
  findAll,
  findById,
};
