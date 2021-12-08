const jwt = require('jsonwebtoken');
const { Users } = require('../models/index');

const secret = process.env.SECRET || 'secret';

const jwtConfiguration = {
  expiresIn: '14d',
  algorithm: 'HS256',
};

const signUpUser = async (displayName, email, password, image) => {
  const emailExists = await Users.findOne({ where: { email } });

  if (emailExists) throw new Error('User already registered');

  await Users.create({ displayName, email, password, image });

  const noPasswordUser = {
    displayName,
    email,
  };
  const token = jwt.sign({ data: noPasswordUser }, secret, jwtConfiguration);
  return token;
};

 const getAllUsers = async () => {
  const allUsers = await Users.findAll();

  if (!allUsers) throw new Error('No users found');

  return allUsers;
};

const getOneUser = async (id) => {
  const user = await Users.findOne({ where: { id } });

  if (!user) throw new Error('User does not exist');

  return user;
};

const deleteOwnUser = async (id) => {
  await Users.destroy({ where: { id } });
};

module.exports = {
  signUpUser,
  getAllUsers,
  getOneUser,
  deleteOwnUser,
};