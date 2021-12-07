const { loginServices } = require('../services/loginService');

const loginControllers = async (req, res) => {
  const { email } = req.body;
  const login = await loginServices.userlogin(email);
  return res.status(200).json(login);
};

module.exports = {
    loginControllers,
};