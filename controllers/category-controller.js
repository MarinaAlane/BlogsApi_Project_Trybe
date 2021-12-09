const Service = require('../services/category-service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const addCategory = await Service.createCategory({ name });

  return res.status(201).json(addCategory);
};

module.exports = {
  createCategory,
};
