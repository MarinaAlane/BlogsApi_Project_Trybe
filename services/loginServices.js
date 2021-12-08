const jwt = require('jsonwebtoken');
const { Users } = require('../models/index');

const secret = process.env.SECRET || 'secret';
const jwtConfiguration = {
  expiresIn: '14d',
  algorithm: 'HS256',
};

const signIn = async (email, password) => {
  const user = await Users.findOne({ where: { email } });

  if (!user) throw new Error('Invalid fields');

  if (password !== user.password) throw new Error('Invalid fields');

  const userWithoutPwd = {
    id: user.id,
    email,
  };

  const token = jwt.sign({ data: userWithoutPwd }, secret, jwtConfiguration);
  return token;
};

module.exports = {
  signIn,
};