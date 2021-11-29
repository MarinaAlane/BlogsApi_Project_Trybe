const db = require('../models');

const isValidEmail = (req, res, next) => {
  const { email } = req.body;

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

const isValidLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const getUser = await db.User.findOne({ where: { email } });

  if (!getUser || email !== getUser.email || password !== getUser.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

module.exports = {
  isValidEmail,
  isValidPassword,
  isValidLogin,
};
