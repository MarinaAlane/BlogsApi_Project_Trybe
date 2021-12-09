const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) =>
  User.create({
    displayName,
    email,
    password,
    image,
  });

const loginUser = async (email) => User.findOne({ where: { email } });

module.exports = {
  createUser,
  loginUser,
};
