const { User } = require('../models');

const checkEmail = (req, res, next) => {
  const { email } = req.body;

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  next();
};

const checkPassword = (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  
  next();
};

const checkUserExist = async (req, res, next) => {
  const { email } = req.body;
  const searchEmail = await User.findOne({ where: { email } });

  if (!searchEmail) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  
  next();
};

const validateLogin = [
  checkEmail,
  checkPassword,
  checkUserExist,
];

module.exports = { validateLogin };