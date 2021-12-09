const Service = require('../services/category-service');
const { Category } = require('../models');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const addCategory = await Service.createCategory({ name });

  return res.status(201).json(addCategory);
};

const listCategories = async (_req, res) => {
  const allCategories = await Category.findAll();

  res.status(200).json(allCategories);
};

module.exports = {
  createCategory,
  listCategories,
};
