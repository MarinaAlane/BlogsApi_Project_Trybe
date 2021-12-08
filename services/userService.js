const jwt = require('jsonwebtoken');
const { Users } = require('../models/index');

const secret = process.env.JWT_SECRET;
const jwtConfiguration = {
  expiresIn: '14d',
  algorithm: 'HS256',
};

const userRegister = async (displayName, email, password, image) => {
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

module.exports = {
  userRegister,
};