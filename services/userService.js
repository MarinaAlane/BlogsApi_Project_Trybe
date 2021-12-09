const jwt = require('jsonwebtoken');
const { User } = require('../models');
const validate = require('../validations/userValidations');

const validations = { email: validate.uniqueEmail, login: validate.user };

const generateToken = ({ id, email }) => (
  jwt.sign({ id, email }, process.env.JWT_SECRET)
);

const validateUser = async ({ email }, validationType) => {
  const user = await User.findOne({ where: { email } });
  validations[validationType](user);
  return user;
};

const createUser = async (payload) => {
  await validateUser(payload, 'email');
  const user = await User.create(payload);
  return generateToken(user);
};

const login = async (payload) => {
  const user = await validateUser(payload, 'login');
  return generateToken(user);
};

const getUsers = async () => User.findAll();

const getUser = async (id) => {
  const user = await User.findByPk(id);
  validate.userById(user);
  return user;
};

const deleteUser = async (id) => User.destroy({
  where: { id },
});

module.exports = {
  createUser,
  login,
  getUsers,
  getUser,
  deleteUser,
};
