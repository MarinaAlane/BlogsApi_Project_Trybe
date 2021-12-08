const { getByProperty } = require('../services/userService');

const verifyEmpyt = (value) => {
  if (!value || typeof value !== 'string') {
    return false;
  }
  return true;
};

const verifyEmailLogin = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // console.log('vazio', verifyEmpyt(email), 'formato', regex.test(email));
  if (!regex.test(email)) {
    return res.status(400).json({
      message: '\'email\' must be a valid email',
    });
  }
  if (!verifyEmpyt(email)) {
    return res.status(400).json({
      message: '\'email\' is not allowed to be empty',
    });
  }
  if (email === undefined) {
    return res.status(400).json({
      message: '\'email\' is required',
    });
  }
  next();
};

const dontExist = async (req, res, next) => {
  const { email } = req.body;
  const existUser = await getByProperty('email', email);
  // console.log('existUser', existUser);
  if (existUser === null) {
    return res.status(409).json({
      message: 'Invalid fields',
    });
  }
  next();
};

const verifyPasswordLogin = (req, res, next) => {
  const { password } = req.body;
  if (!verifyEmpyt(password)) {
    return res.status(400).json({
      message: '\'password\' is not allowed to be empty',
    });
  }
  if (password === undefined) {
    return res.status(400).json({
      message: '\'password\' is required',
    });
  }
  next();
};

module.exports = { verifyEmailLogin, verifyPasswordLogin, dontExist };
