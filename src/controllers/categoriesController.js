const categoryServ = require('../services/categoriesService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = { name };

  const result = await categoryServ.creatingCategory(category);
  return res.status(201).json(result);
};

const getAllCategories = async (_req, res) => {
  const result = await categoryServ.gettingAllCategories();
  return res.status(200).json(result);
};

module.exports = {
  createCategory,
  getAllCategories,
};