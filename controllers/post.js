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

module.exports = {
  create,
  findAll,
};
