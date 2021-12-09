const Login = require('../services/Login');

const authentication = async (req, res) => {
  const { email, password } = req.body;
  const { token, status, message } = await Login.authentication({ email, password });

  if (message) {
    return res.status(status).json({ message });
  }

  res.status(status).json({ token });
};

module.exports = {
  authentication,
};
