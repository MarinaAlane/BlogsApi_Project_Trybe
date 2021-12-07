const serviceCategories = require('../services/categoriesServices');

const getAll = async (_req, res) => {
  const allCategories = await serviceCategories.getAll();
  return res.status(200).json(allCategories);
};

module.exports = { getAll };