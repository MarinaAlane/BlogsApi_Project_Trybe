const loginService = require('../services/loginService');

const login = async (req, res) => {
  const result = await loginService.login(req.body);
  if (result.erro) return res.status(result.erro).json({ message: result.message }); 
  res.status(result.code).json({ token: result.token });
};

module.exports = {
  login,
};
