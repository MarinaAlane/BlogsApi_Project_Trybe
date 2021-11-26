const { User } = require('../models');
const {
  validEmail,
  validName,
  validPass,
  tokenGenerator,
  existingUser,
  isValidUser,
} = require('../utils/validations');

const userRegister = async ({ displayName, email, password, image }) => {
  if (await existingUser(email) !== null) {
    return { error: { code: 'conflict' } };
  }
  if (!validEmail(email)) {
    return { error: { code: 'invalidEmail' } };
  }
  if (!validPass(password)) {
    return { error: { code: 'invalidPass' } };
  }
  if (!validName(displayName)) {
    return { error: { code: 'invalidName' } };
  }
  await User.create({ displayName, email, password, image });
  return {
    token: tokenGenerator(email, password),
  };
};

const getAllUsers = async (email) => {
  const result = await isValidUser(email);
  if (!result.error) return User.findAll();
  return result;
};

const getUserById = async (id, email) => {
  const result = await isValidUser(email);
  if (!result.error) {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return ({
        error: { code: 'invalidId' },
      });
    } return user;
  } return result; 
};

module.exports = {
  userRegister,
  getAllUsers,
  getUserById,
};