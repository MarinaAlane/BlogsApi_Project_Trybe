const Users = require('../services/user');
const { createToken } = require('../utils/token');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { dataValues } = await Users.create({ displayName, email, password, image });
  delete dataValues.password;
  const token = createToken({ payload: dataValues });
  res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await Users.findUserByEmail(email);

  if (!findUser || findUser.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  delete findUser.password;
  const token = createToken({ payload: findUser });
  res.status(200).json({ token });
};

const findById = async (req, res) => {
  const { id } = req.params;
  const user = await Users.findById(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  res.status(200).json(user);
};

const findAll = async (_req, res) => {
  const allUsers = await Users.findAll();
  res.status(200).json(allUsers);
};

module.exports = {
  create,
  login,
  findById,
  findAll,
};
