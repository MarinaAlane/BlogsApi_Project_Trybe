const service = require('../services/validationUser');

const cadastration = async (req, res) => {
  const token = await service.cadastration(req.body);
  return res.status(201).json({ token });
};

module.exports = {
  cadastration,
};
