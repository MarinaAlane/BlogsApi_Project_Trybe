const categoryService = require('../service/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  console.log('cat controller');
  const newCategory = await categoryService.createCategory(name);
  return res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};
