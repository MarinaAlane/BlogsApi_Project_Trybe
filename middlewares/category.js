const service = require('../services/category');
const { created, ok } = require('../utils/codes');

const registerCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await service.registerCategory(name);
  return res.status(created).json(newCategory);
};

const getAllCategories = async (_req, res) => {
  const categories = await service.getAllCategories();
  console.log(categories);
  return res.status(ok).json(categories);
};

module.exports = {
  getAllCategories,
  registerCategory,
};