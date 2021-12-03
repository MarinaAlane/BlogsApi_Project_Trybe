const service = require('../services/users');

const getAll = async (req, res) => {
  const result = await service.getAll(req.headers);
  return result;
};
