const { User } = require('../models/User');
const { createToken } = require('../middlewares/CreateToken');

const displayNameValidation = (displayName) => {
  if (displayName.length < 8) {
    return { err: 
      { code: 400,
        message: { message: '"displayName" length must be at least 8 characters long' } } };
  }
};

const passwordValidation = (password) => {
  if (password.length < 6) {
    return { err: 
      { code: 400,
        message: { message: '"password" length must be 6 characters long' } } };
  }
};

const userInfoValidation = async (email, password, displayName) => {
  // retirado de https://www.w3resource.com/javascript/form/email-validation.php
  const emailRegex = /\S+@\S+\.\S+/;
  if (!email) {
    return { err: { code: 400, message: { message: '"email" is required' } } };
  }
  if (!password) {
    return { err: { code: 400, message: { message: '"password" is required' } } };
  }
  if (!displayName) {
    return { err: { code: 400, message: { message: '"displayName" is required' } } };
  }
  if (!emailRegex.test(email)) {
    return { err: { code: 400, message: { message: '"email" must be a valid email' } } };
  }
};

const createUserServices = async ({ email, password, displayName, image }) => {
  if (await userInfoValidation(email, password, displayName)) {
    return userInfoValidation(email, password, displayName);
  }
  if (displayNameValidation(displayName)) return displayNameValidation(displayName);
  if (passwordValidation(password)) return passwordValidation(password);
  const emailExists = await User.findOne({ where: { email } });
  if (emailExists) return { err: { code: 409, message: { message: 'User already registered' } } };
  const user = await User.create({ email, password, displayName, image });
  const token = createToken(user, email);
  return token;
};

module.exports = { createUserServices };