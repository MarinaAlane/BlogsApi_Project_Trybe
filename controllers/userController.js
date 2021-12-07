const UserServices = require('../services/userServices');
const { createToken } = require('../utils/token');

// create user
const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { dataValues } = await UserServices.create({ displayName, email, password, image });
  delete dataValues.password;
  const token = createToken({ payload: dataValues });
  res.status(201).json({ token });
};

// login controller
const login = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await UserServices.findUserByEmail(email);

  if (!findUser || findUser.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  delete findUser.password;
  const token = createToken({ payload: findUser });
  res.status(200).json({ token });
};

// find  user by Id
const findById = async (req, res) => {
  const { id } = req.params;
  const user = await UserServices.findById(id);
  
  if (!user) {
    return res.status(404).json({ message: 'User dont exist' });
  }

  res.status(200).json(user);
};

// list all users
const listAll = async (_req, res) => {
  const allUsers = await UserServices.findAll();
  res.status(200).json(allUsers);
};

module.exports = {
  create,
  login,
  findById,
  listAll,
};
