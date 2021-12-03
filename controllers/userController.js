const service = require('../services/users');

const getAll = async (req, res) => {
  const result = await service.getAll(req.headers.authorization);
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const result = await service.getById(req.headers.authorization, req.params);
  return res.status(200).json(result);
};

module.exports = {
  getAll,
  getById,
};
