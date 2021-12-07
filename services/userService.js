const { User } = require('../models');
const utils = require('../utils');

const createUser = async ({ displayName, email, password, image }) => {
  await User.create(displayName, email, password, image);
  const token = utils.create(email);
  return token;
};

module.exports = {
  createUser,
};