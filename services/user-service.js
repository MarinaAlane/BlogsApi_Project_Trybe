const { user } = require('../models');

const createUser = async ({ displayName, email, password, image }) =>
  user.create({
    displayName,
    email,
    password,
    image,
  });

const loginUser = async (email) => user.findOne({ where: { email } });

module.exports = {
  createUser,
  loginUser,
};
