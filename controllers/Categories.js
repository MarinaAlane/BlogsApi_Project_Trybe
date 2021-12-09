const Categories = require('../services/Categories');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { category, status, message } = await Categories.createCategory({ name });

  if (message) {
    return res.status(status).json({ message });
  }

  res.status(status).json(category);
};

const getAll = async (_req, res) => {
  const { status, categories } = await Categories.getAll();

  res.status(status).json(categories);
};

module.exports = {
  createCategory,
  getAll,
};
