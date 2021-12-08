const service = require('../services/users');
 
const getAll = async (req, res) => {
  const result = await service.getAll(req.headers.authorization);
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const result = await service.getById(req.headers.authorization, req.params);
  return res.status(200).json(result);
};

const deleteUser = async (req, res) => {
  const token = req.headers.authorization;
  service.deleteUser(token);
  return res.status(204).json();
};

module.exports = {
  getAll,
  getById,
  deleteUser,
};
