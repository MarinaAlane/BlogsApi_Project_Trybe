const User = require('../models/userModel');

const getByProperty = async (key, value) => {
  const data = await User.getBy(key, value);
  return data;
};

const getById = async ({ id }) => {
  const data = await User.getByPk({ id });
  return data;
};

const getAllUser = async () => {
  const data = await User.getAll();
  return data;
};

const createNewUser = async ({ displayName, email, password, image }) => {
  const data = await User.createOne({ displayName, email, password, image });
  return data;
};

module.exports = { createNewUser, getByProperty, getById, getAllUser };
