const { User } = require('../models');
const validationToken = require('../utils/validationToken');
const utils = require('../utils/validationUser');

const getAll = async (token) => {
  validationToken(token);
  const findAll = await User.findAll();
  return findAll;
};

const getById = async (token, { id }) => {
  validationToken(token);
  const result = utils.existsById(id);
  return result;
};

const deleteUser = async (token) => {
  const { id } = validationToken(token);
  await User.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getById,
  deleteUser,
};
