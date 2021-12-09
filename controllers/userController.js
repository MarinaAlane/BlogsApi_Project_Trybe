const userService = require('../services/userService');

const createUser = async (req, res) => {
  const token = await userService.createUser(req.body);
  return res.status(201).json({ token });
};

const login = async (req, res) => {
  const token = await userService.login(req.body);
  return res.status(200).json({ token });
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
};

const getUser = async (req, res) => {
  const users = await userService.getUser(req.params.id);
  return res.status(200).json(users);
};

const deleteUser = async (req, res) => {
  await userService.deleteUser(req.token.id);
  return res.status(204).end();
};

module.exports = {
  createUser,
  login,
  getUsers,
  getUser,
  deleteUser,
};
