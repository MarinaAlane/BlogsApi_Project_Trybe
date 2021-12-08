const Jwt = require('jsonwebtoken');
require('dotenv').config();
const userService = require('../service/userService');

const SECRET = process.env.JWT_SECRET;

const errorMessage = {
  blankEmail: '"email" is required',
  blankPassword: '"password" is required',
  blankToken: 'Token not found',
  displayName: '"displayName" length must be at least 8 characters long',
  emptyEmail: '"email" is not allowed to be empty',
  emptyPassword: '"password" is not allowed to be empty',
  invalidEmail: '"email" must be a valid email',
  invalidLogin: 'Invalid fields',
  invalidPassword: '"password" length must be 6 characters long',
  invalidToken: 'Expired or invalid token',
  usedEmail: 'User already registered',
};

const errorStatus = {
  badRequest: 400,
  conflict: 409,
  unauthorized: 401,
};

const isDisplayNameValid = (displayName) => {
  if (displayName.length < 8) {
    const error = new Error(errorMessage.displayName);
    error.status = errorStatus.badRequest;
    throw error;
  }
};

const isEmailValid = (email) => {
  const emailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
  const error = new Error('');
  if (!email) {
    error.message = errorMessage.blankEmail;
    error.status = errorStatus.badRequest;
    throw error;
  }
  if (!email.match(emailFormat)) {
    error.message = errorMessage.invalidEmail;
    error.status = errorStatus.badRequest;
    throw error;
  }
};

const isEmailBlank = (email) => {
  const error = new Error('');
  if (email === '') {
    error.message = errorMessage.emptyEmail;
    error.status = errorStatus.badRequest;
    throw error;
  }
  if (!email) {
    error.message = errorMessage.blankEmail;
    error.status = errorStatus.badRequest;
    throw error;
  }
};

const isPasswordBlank = (password) => {
  if (password === '') {
    const error = new Error('');
    error.message = errorMessage.emptyPassword;
    error.status = errorStatus.badRequest;
    throw error;
  }
};

const isPasswordValid = (password) => {
  const error = new Error('');
  if (!password) {
    error.message = errorMessage.blankPassword;
    error.status = errorStatus.badRequest;
    throw error;
  }
  if (password === '') {
    error.message = errorMessage.emptyPassword;
    error.status = errorStatus.badRequest;
    throw error;
  }
  if (password.length <= 5) {
    error.message = errorMessage.invalidPassword;
    error.status = errorStatus.badRequest;
    throw error;
  }
};

const isEmailRegistered = async (email) => {
  const isAlreadyRegistered = await userService.findUserByEmail(email);
  if (isAlreadyRegistered === null) return;
  if (isAlreadyRegistered.email === email) {
    const error = new Error(errorMessage.usedEmail);
    error.status = errorStatus.conflict;
    throw error;
  }
};

const loginAuthentication = async (email, _password) => {
  const isLoginValid = await userService.findUserByEmail(email);
  if (isLoginValid === null) {
    const error = new Error(errorMessage.invalidLogin);
    error.status = errorStatus.badRequest;
    throw error;
  }
};

const tokenRequired = (token) => {
  if (!token || token === '') {
    const error = new Error(errorMessage.blankToken);
    error.status = errorStatus.unauthorized;
    throw error;
  }
};

const isTokenValid = (token) => {
  try {
    Jwt.verify(token, SECRET);
  } catch (err) {
    err.message = errorMessage.invalidToken;
    err.status = errorStatus.unauthorized;
    throw err;
  }
};

const loginValidation = async (req, _res, next) => {
  const { email, password } = req.body;
  isEmailBlank(email);
  isPasswordBlank(password);
  isPasswordValid(password);
  await loginAuthentication(email, password);
  next();
};

const tokenValidation = (req, _res, next) => {
  const token = req.headers.authorization;
  tokenRequired(token);
  isTokenValid(token);
  const payload = Jwt.verify(token, SECRET);
  req.user = payload;
  next();
};

const newUserValidation = async (req, _res, next) => {
  const { displayName, email, password } = req.body;
  isDisplayNameValid(displayName);
  isEmailValid(email);
  isPasswordValid(password);
  await isEmailRegistered(email);
  next();
};

module.exports = {
  newUserValidation,
  tokenValidation,
  loginValidation,
};
