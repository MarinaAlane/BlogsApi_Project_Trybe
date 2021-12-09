const jwt = require('jsonwebtoken');
const { HTTP_BAD_REQUEST_STATUS, HTTP_OK_STATUS } = require('../utils/statusCode');
const { emailIsValid } = require('../utils/checkEmail');
const { User } = require('../models');

const validateEmail = (email) => {
  let result = {};
  if (!email || !emailIsValid(email)) {
    result = { erro: HTTP_BAD_REQUEST_STATUS, message: '"email" is required' };
  }
  if (email === '') {
    result = { erro: HTTP_BAD_REQUEST_STATUS, message: '"email" is not allowed to be empty' };
  }
  return result;
};

const validatePassword = (password) => {
  let result = {};
  if (!password) {
    result = { erro: HTTP_BAD_REQUEST_STATUS, message: '"password" is required' };
  }
  if (password === '') {
    result = { erro: HTTP_BAD_REQUEST_STATUS, message: '"password" is not allowed to be empty' };
  }
  return result;
};

const login = async (userData) => {
  const { email, password } = userData;
  
  const validatedEmail = validateEmail(email);
  const validatedPassword = validatePassword(password);

  if (validatedEmail.erro) return validatedEmail;
  if (validatedPassword.erro) return validatedPassword;

  const [user] = await User.findAll({ where: { email, password } });
  if (!user) {
    return { erro: HTTP_BAD_REQUEST_STATUS, message: 'Invalid fields' };
  }
  const { password: _, image: __, ...payload } = user.dataValues;

  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return { code: HTTP_OK_STATUS, token };
};

module.exports = {
  login,
};
