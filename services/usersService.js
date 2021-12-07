const { UserModel } = require('../models');

const createUser = async (newUser) => {
const { displayName, email, password, image } = newUser;
await UserModel.create({
    displayName,
    email,
    password,
    image,
  });
};

module.exports = { createUser };
