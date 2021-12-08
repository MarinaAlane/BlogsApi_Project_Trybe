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

const getUserById = async (req, res) => {
  const { id } = req.params;
  const response = await usersServ.gettingUserById(id);

  const result = 'message' in response;

  if (result) {
    return res.status(404).json(response);
  }

  return res.status(200).json(response);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};