const Categories = require('../services/categories');

const create = async (req, res) => {
  const { name } = req.body;
  const { dataValues } = await Categories.create({ name });
  res.status(201).json(dataValues);
};

const findAll = async (_req, res) => {
  const allUsers = await Categories.findAll();
  res.status(200).json(allUsers);
};

module.exports = {
  create,
  findAll,
};
