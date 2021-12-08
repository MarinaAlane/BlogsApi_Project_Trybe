const { getByProperty } = require('../services/userService');

const verifyEmpyt = (value) => {
  if (!value || typeof value !== 'string') {
    return false;
  }
  return true;
};

const verifyName = (req, res, next) => {
  const { displayName } = req.body;
  const LENGTH_MIN = 8;
  if (!verifyEmpyt(displayName)) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }
  if (displayName.legth < LENGTH_MIN) {
    return res.status(400).json({
      message: '\'displayName\' length must be at least 8 characters long',
    });
  }
  next();
};

const verifyEmail = (req, res, next) => {
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
      message: '\'email\' is required',
    });
  }
  next();
};

const alreadyExist = async (req, res, next) => {
  const { email } = req.body;
  const existUser = await getByProperty('email', email);
  // console.log('existUser', existUser);
  if (existUser !== null) {
    return res.status(409).json({
      message: 'Email already registered',
    });
  }
  next();
};

const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  if (!verifyEmpyt(password)) {
    return res.status(400).json({
      message: '\'password\' is required',
    });
  }
  next();
};

module.exports = { verifyName, verifyEmail, verifyPassword, alreadyExist };
