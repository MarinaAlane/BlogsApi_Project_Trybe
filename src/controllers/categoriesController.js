const serviceCategories = require('../services/categoriesServices');

const getAll = async (_req, res) => {
  const allCategories = await serviceCategories.getAll();
  return res.status(200).json(allCategories);
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await serviceCategories.newCategory(name);
  return res.status(201).json(newCategory);
};

module.exports = { getAll, createCategory };