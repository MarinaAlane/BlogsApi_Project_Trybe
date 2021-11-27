const { User } = require('../models');

const {
  DISPLAY_NAME,
  EMAIL,
  EMAIL_REQ,
  PASSWORD_REQ,
  PASSWORD,
  USER,
  EMAIL_EMPTY,
  PASSWORD_EMPTY,
} = require('../utils/errorMessages');

const { BAD_REQUEST, CONFLICT } = require('../utils/statusError');

const isValidDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  
  if (displayName.length < 8) return res.status(BAD_REQUEST).json(DISPLAY_NAME);
  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;

  const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;

  if (!email || email === '') return res.status(BAD_REQUEST).json(EMAIL_REQ);
  if (!re.test(email)) return res.status(BAD_REQUEST).json(EMAIL);
  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;
  
  if (!password || password === '') return res.status(BAD_REQUEST).json(PASSWORD_REQ);
  if (password.length !== 6) return res.status(BAD_REQUEST).json(PASSWORD);
  next();
};

const isValidLoginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (email === '') return res.status(BAD_REQUEST).json(EMAIL_EMPTY);
  if (password === '') return res.status(BAD_REQUEST).json(PASSWORD_EMPTY);
  if (!email) return res.status(BAD_REQUEST).json(EMAIL_REQ);
  if (!password) return res.status(BAD_REQUEST).json(PASSWORD_REQ);
  next();
};

module.exports = {
  isValidDisplayName,
  isValidEmail,
  isValidPassword,
  isValidLoginUser,
};