const userService = require('../service/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = await userService.createUser(displayName, email, password, image);
  return res.status(201).json({ token: newUser });
};

const login = async (req, res) => {
  const { email } = req.body;
  const newToken = await userService.login(email);
  return res.status(200).json({ token: newToken });
};

const findUsers = async (_req, res) => {
  const foundUsers = await userService.findUsers();
  return res.status(200).json(foundUsers);
};

module.exports = {
  createUser,
  login,
  findUsers,
};
