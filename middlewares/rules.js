const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const isEmailValid = (email) => {
  const emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return emailPattern.test(email);
};

const validateName = (req, res, next) => {
  const { displayName } = req.body;
  const MIN_NAME_LENGTH = 8;

  if (displayName.length < MIN_NAME_LENGTH) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    if (email === '') {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: '"email" is not allowed to be empty',
      });
    }

    return res.status(StatusCodes.BAD_REQUEST).json({
      message: '"email" is required',
    });
  }

  if (!isEmailValid(email)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: '"email" must be a valid email',
    });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const PASSWORD_LENGTH = 6;

  if (!password) {
    if (password === '') {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: '"password" is not allowed to be empty',
      });
    }

    return res.status(StatusCodes.BAD_REQUEST).json({
      message: '"password" is required',
    });
  }

  if (password.length < PASSWORD_LENGTH || password.length > PASSWORD_LENGTH) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: '"password" length must be 6 characters long',
    });
  }

  next();
};

const validateJWT = (req, res, next) => {
  const token = req.headers.authorization;
  const { JWT_SECRET } = process.env;

  console.log(token);

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    const { email } = jwt.verify(token, JWT_SECRET);
    req.user = email;
    next();
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
  validateJWT,
};
