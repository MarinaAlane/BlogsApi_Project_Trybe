const jwt = require('jsonwebtoken');
const { created, ok } = require('../utils/codes');
const service = require('../services/user');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const registerUser = async (req, res) => {
  const user = req.body;
  const registeredUser = await service.registerUser(user);
  const token = jwt.sign({ data: { ...registeredUser } }, secret, jwtConfig);
  return res.status(created).json({ token });
};

const loginUser = async (req, res) => {
  const { email } = req.body;
  const user = await service.findEmail(email);
  const token = jwt.sign({ data: { ...user } }, secret, jwtConfig);
  return res.status(ok).json({ token });
};

module.exports = {
  registerUser,
  loginUser,
};