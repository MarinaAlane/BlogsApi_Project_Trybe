const jwt = require('jsonwebtoken');
const { created, ok, notFound } = require('../utils/codes');
const { nonexistent } = require('../utils/errMsg');
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

const getAllUsers = async (_req, res) => {
  const users = await service.getAllUsers();
  return res.status(ok).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await service.getUserById(id);
    return user ? res.status(ok).json(user) : res.status(notFound).json(nonexistent('User'));
  } catch (error) {
    return res.status(notFound).json(error.message);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
};