require('dotenv').config();
const jwt = require('jsonwebtoken');
const userService = require('../services/userServices');

const SECRET = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userService.create({ displayName, email, password, image });
  const token = jwt.sign(user.dataValues, SECRET, jwtConfig);
  return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAll();
  const users = allUsers.map(({ dataValues }) => dataValues);
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);
  if (!user || user === null) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

module.exports = {
  create,
  getAllUsers,
  getUserById,
};
