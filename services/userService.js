const { User } = require('../models');
const generateToken = require('../auth/generateToken');
const { validateUser } = require('../validations/users/userValidations');

const addUser = async (user) => {
  const { displayName, email, password } = user;
  const isNotValidUser = validateUser(displayName, email, password);

  if (isNotValidUser) return isNotValidUser;

  const foundUser = await User.findOne({ where: { email: user.email } });
  if (foundUser) return { code: 409, message: 'User already registered' };

  const token = generateToken({ displayName, email });
  return { code: 201, token };
};

const getById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return { code: 404, message: 'User does not exist' };

  const { dataValues } = user;
  const { password, ...userData } = dataValues;

  return { code: 200, userWithoutPwd: userData };
};

module.exports = {
  addUser,
  getById,
};
