const createToken = require('../middlewares/CreateToken');
const { User } = require('../models');
const { validateUser } = require('../middlewares/Validations');

const create = async (req, res) => {
  const error = validateUser(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { displayName, email, password, image } = req.body;

  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const newUser = await User.create({ displayName, email, password, image });

  const token = createToken(newUser);

  res.status(201).json({ token });
};

const login = async (req, res) => {
  const error = validateUser(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { email, password } = req.body;

  const userExists = await User.findOne({ where: { email } });

  if (!userExists || password !== userExists.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = createToken({ email, password });

  res.status(200).json({ token });
};

const getAll = async (_req, res) => {
  const users = await User.findAll();

  res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const serchedUser = await User.findByPk(id);

  if (!serchedUser) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  res.status(200).json(serchedUser);
};

const remove = async (req, res) => {
  const { id } = req.user.dataValues;

  await User.destroy({ where: { id } });

  res.status(204).json();
};

module.exports = {
  create,
  login,
  getAll,
  getById,
  remove,
};
