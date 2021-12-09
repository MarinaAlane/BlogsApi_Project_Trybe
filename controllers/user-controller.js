const Service = require('../services/user-service');
const Model = require('../models');
const { newToken } = require('../auth/token');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { dataValues } = await Service.createUser({ displayName, email, password, image });
  const token = newToken({ data: dataValues });

  return res.status(201).json(token);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const emailExist = await Service.loginUser(email);

  if (!emailExist || emailExist.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = newToken({ payload: emailExist });

  return res.status(200).json({ token });
};

const listAllUsers = async (_req, res) => {
  const getUsers = await Model.User.findAll();

  return res.status(200).json(getUsers);
};

const listUserById = async (req, res) => {
  const { id } = req.params;

  const getUserId = await Model.User.findByPk(id);

  res.status(200).json(getUserId);
};

module.exports = {
  createUser,
  loginUser,
  listAllUsers,
  listUserById,
};
