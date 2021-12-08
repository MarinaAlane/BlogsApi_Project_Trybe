const Jwt = require('jsonwebtoken');
require('dotenv').config();
const userService = require('../service/userService');

const SECRET = process.env.JWT_SECRET;

const errorMessage = {
  displayName: '"displayName" length must be at least 8 characters long',
  blankEmail: '"email" is required',
  blankPassword: '"password" is required',
  validEmail: '"email" must be a valid email',
  validPassword: '"password" length must be 6 characters long',
  usedEmail: 'Email already registered',
};

const errorStatus = {
  conflict: 409,
  badRequest: 400,
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
    error.message = errorMessage.validEmail;
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
  if (password.length < 5) {
    error.message = errorMessage.validPassword;
    error.status = errorStatus.badRequest;
    throw error;
  }
};

const isEmailRegistered = async (email) => {
  const isAlreadyRegistered = await userService.findUserByEmail(email);
  if (isAlreadyRegistered) {
    const error = new Error(errorMessage.usedEmail);
    error.status = errorStatus.conflict;
    throw error;
  }
};

const newUserValidation = (req, _res, next) => {
  const { displayName, email, password } = req.body;
  isDisplayNameValid(displayName);
  isEmailValid(email);
  isPasswordValid(password);
  isEmailRegistered(email);
  next();
};

module.exports = {
  newUserValidation,
  isPasswordValid,
};
