const services = require('../services/postServices');

const create = async (req, res) => {
  const { title, content } = req.body;
  const { userId } = req;
  const { dataValues } = await services.create({ title, content, userId });

  delete dataValues.updated;
  delete dataValues.published;
  return res.status(201).json(dataValues);
};

const getAllPost = async (_req, res) => {
  const response = await services.getAllPost();
  return res.status(200).json(response);
};

module.exports = {
  create,
  getAllPost,
};