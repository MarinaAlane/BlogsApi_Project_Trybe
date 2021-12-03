const service = require('../services/validationUser');

const cadastration = async (req, res, _nex) => {
  const token = service.cadastration(req.body);
  return res.status(201).json({ token });
};

module.exports = {
  cadastration,
};