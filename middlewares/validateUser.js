const { User } = require('../models');

const emailValidation = async (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;
  const isvalidEmail = emailRegex.test(email);

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!isvalidEmail) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  const checkUser = await User.findOne({ where: { email } });
  if (checkUser) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

const loginValidate = (req, res, next) => {
  const { email, password } = req.body;

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  next();
};

const nameValidation = (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName || displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

module.exports = {
  emailValidation,
  nameValidation,
  passwordValidation,
  loginValidate,
};
