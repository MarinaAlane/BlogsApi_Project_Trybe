const { User } = require('../../models');

const create = async (displayName, email, password, image) => {
  const getUser = await User.findOne({ where: { email } });
  if (getUser) {
    return { message: 'User already registered' };
  } 
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

const getAll = async () => {
  const getUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return getUsers;
};

const getById = async (id) => {
  const getUserById = await User
  .findOne({ where: { id }, attributes: { exclude: ['password'] } });
  return getUserById;
};

module.exports = { create, getAll, getById };
