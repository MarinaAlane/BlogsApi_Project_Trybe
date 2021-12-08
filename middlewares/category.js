const service = require('../services/category');
const { created } = require('../utils/codes');

const registerCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await service.registerCategory(name);
  return res.status(created).json(newCategory);
};

module.exports = {
  registerCategory,
};