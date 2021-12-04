const service = require('../services/validationCategories');

const createCategorie = async (req, res) => {
  const result = await service.createCategorie(req.body, req.headers.authorization);
  return res.status(201).json(result);
};

const getAll = async (req, res) => {
  const token = req.headers.authorization;
  const result = await service.getAll(token);
  return res.status(200).json(result);
};

module.exports = {
  createCategorie,
  getAll,
};
