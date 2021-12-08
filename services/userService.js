const { User } = require('../models');

const createUser = async (newUser) => {
  const { displayName, email, password, image } = newUser;
  await User.create({
    displayName,
    email,
    password,
    image,
  });
};

module.exports = { createUser };
