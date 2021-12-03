const service = require('../services/makeLogin');

const login = async (req, res) => {
  const token = await service.makeLogin(req.body);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};  
