const { User } = require('../models');

const displayNameField = async (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName || displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const validEmail = async (req, res, next) => {
  const { email } = req.body;

  const validate = /[a-z0-9._-]+@[a-z0-9]+\.[a-z]/;

  if (!email) {
    return res.status(400).json({
      message: '"email" is required',
    });
  }
  if (!email.match(validate)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  next();
};

const passwordField = async (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      message: '"password" is required',
    });
  }

  if (password.length !== 6) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long',
    });
  }
  next();
};

const userExists = async (req, res, next) => {
  const { email } = req.body;

  const getAllEmails = await User.findAll();

  const emailFinded = getAllEmails.some((a) => a.dataValues.email === email);
  if (emailFinded) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  next();
}

module.exports = {
  displayNameField,
  validEmail,
  passwordField,
  userExists,
};
