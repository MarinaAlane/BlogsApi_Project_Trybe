const { User } = require('../models');

const checkDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long', 
    });
  }
  next();
};

const checkEmail = (req, res, next) => {
  const { email } = req.body;
  // encontrei a muito tempo na internet e trago de projeto em projeto, acabei perdendo o link de referência.
  const emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  const emailIsValid = emailPattern.test(email);
  User.findAll({ where: { email } }).then((e) => {
    if (e.length > 0) {
      return res.status(409).json({ message: 'User already registered' });
    }
  });
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!emailIsValid) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const checkPassword = (req, res, next) => {
  const { password } = req.body;
  
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  next();
};

module.exports = {
  checkDisplayName,
  checkEmail,
  checkPassword,
};