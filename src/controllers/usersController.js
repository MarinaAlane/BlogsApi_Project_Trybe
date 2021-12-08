const usersServ = require('../services/usersService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = { displayName, email, password, image };
  const response = await usersServ.creatingUser(user);

  const result = 'token' in response;

  if (result) return res.status(201).json(response);

  return res.status(409).json(response);
};

const getAllUsers = async (_req, res) => {
const result = await usersServ.gettingAllUsers();
return res.status(200).json(result);
};

module.exports = {
  createUser,
  getAllUsers,
};