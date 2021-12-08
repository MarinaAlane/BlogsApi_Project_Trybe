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

const validateNoLogin = async (param) => {
  const { email, password } = param;
  if (!email) {
    return { status: 400, message: '"email" is required' };
  }

  if (!password) {
    return { status: 400, message: '"password" is required' };
  }
  
  const login = await User.findOne({ where: { email, password } });

  if (!login) {
  return { status: 400, message: 'Invalid fields' };
  }
  return { status: 200 };
};

const getUsers = async () => {
  const users = await User.findAll();
  return { status: 200, users };
}; 
module.exports = { createUser, validateNoLogin, getUsers };
