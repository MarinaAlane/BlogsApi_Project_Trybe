const { User } = require('../models');
const { createToken } = require('../utils/tokenCreation');

const createUser = async (displayName, email, password, image) => {
  await User.create({ displayName, email, password, image });
  return createToken(displayName);
};

const findUserByEmail = async (email) => {
  const foundUser = await User.findOne({ where: { email } });
  return foundUser;
};

module.exports = {
  createUser,
  findUserByEmail,
};
