const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv/config');

const secret = process.env.SECRET || 'minhasenhasecreta';

const createUser = async (displayName, email, password, image) => {
  try {
    await User.create({ displayName, email, password, image });

    const payload = { displayName, email };

    const token = jwt.sign(payload, secret);

    return { token };
  } catch (error) {
    return { status: 409, message: 'User already registered' };
  }
};

const login = async (email, password) => {
  const findUser = await User.findOne({ where: { email } });

  if (!findUser || findUser.password !== password) {
    return { status: 400, message: 'Invalid fields' }; 
  }

  const payload = { email, password };

  const token = jwt.sign(payload, secret);

  return { token };
};

const findAll = async () => {
  const result = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });

  return result;
};

const findById = async (params) => {
  try {
    const result = await User.findByPk(params);
    const { id, displayName, email, image } = result;

    return { id, displayName, email, image };
  } catch (error) {
    return { status: 404, message: 'User does not exist' };
  }
};

module.exports = {
  createUser,
  login,
  findAll,
  findById,
};
