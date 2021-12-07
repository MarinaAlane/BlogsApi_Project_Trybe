const { User } = require('../models');

const checkDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  const MINLENGTH = 8;

  if (+displayName.length < MINLENGTH) {
    return res.status(400).json({ 
        message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const checkEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!emailRegex) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const checkPassword = (req, res, next) => {
  const { password } = req.body;
  const MINLENGTH = 6;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (+password.length < MINLENGTH) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  next();
};

const checkUserExist = async (req, res, next) => {
  const { email } = req.body;
  const searchEmail = await User.findOne({ where: { email } });

  if (searchEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }
  
  next();
};

const validateUser = [
  checkDisplayName,
  checkEmail,
  checkPassword,
  checkUserExist,
];

module.exports = {
  validateUser,
};