const service = require('../services/makeLogin');

const login = async (req, res) => {
  const token = await service.makelogin(req.body);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};  
