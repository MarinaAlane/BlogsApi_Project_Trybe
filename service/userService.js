const { User } = require('../models');
const { createToken } = require('../utils/tokenCreation');

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  const { password: _, ...payload } = user.dataValues;
  return createToken(payload);
};

const findUserByEmail = async (email) => {
  const foundUser = await User.findOne({ where: { email } });
  return foundUser;
};

const login = async (email) => {
  const foundUser = await User.findOne({ where: { email } });
  const { password: _, ...payload } = foundUser.dataValues;
  return createToken(payload);
};

module.exports = {
  createUser,
  findUserByEmail,
  login,
};
