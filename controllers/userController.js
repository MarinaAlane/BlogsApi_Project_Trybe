const service = require('../services/userService');

const create = async (req, res) => {
  const token = await service.createUser(req.body);
  return res.status(201).json({ token });
};

module.exports = {
  create,
};