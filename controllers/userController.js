const jwt = require('jsonwebtoken');
const UserService = require('../services/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  await UserService.createUser({ displayName, email, password, image });

  const token = jwt.sign({ displayName, email }, process.env.JWT_SECRET);
  req.headers.authorization = token;
  return res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const { status, message } = await UserService.login({ email, password });

  if (message) { return res.status(status).json({ message }); }

  const token = jwt.sign({ email, password }, process.env.JWT_SECRET);
  // req.headers.authorization = token;

  res.status(status).json({ token });
};

const getAllUsers = async (req, res) => {
  const { status, users } = await UserService.getAllUsers();
  return res.status(status).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await UserService.getUserById({ id });
  // console.log(data);
  if (message) return res.status(status).json({ message });

  return res.status(status).json(data);
};

module.exports = {
  createUser,
  login,
  getAllUsers,
  getUserById,  
};
