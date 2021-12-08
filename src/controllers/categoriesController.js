const categoryServ = require('../services/categoriesService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = { name };

  const result = await categoryServ.creatingCategory(category);
  return res.status(201).json(result);
};

const findCategory = (_req, res) => {
  const message = { message: 'nada alem de tolices' };
  return res.send(message);
};

module.exports = {
  createCategory,
  findCategory,
};