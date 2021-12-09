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

const login = async (param) => {
  const { email, password } = param;

  if (!email) {
    return { status: 400, message: '"email" is required' };
  }
  if (!password) {
    return { status: 400, message: '"password" is required' };
  }

  const response = await User.findOne({ where: { email, password } });

  if (!response) {
    return { status: 400, message: 'Invalid fields' };
  }
  return { status: 200 };
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return { status: 200, users };
};

const getUserById = async (userId) => {
  const { id } = userId;
  const response = await User.findOne({ where: { id } });

  if (!response) {
    return { status: 404, message: 'User does not exist' };
  }
  return { status: 200, data: response };
};

module.exports = {
  createUser,
  login,
  getAllUsers,
  getUserById,
};
