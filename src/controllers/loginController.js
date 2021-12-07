const serviceLogin = require('../services/loginServices');

const loginCreate = async (req, res) => {
  const { email, password } = req.body;
  const token = await serviceLogin.userLogin({ email, password });
  return res.status(200).json({ token });
};

module.exports = { loginCreate };