const { User } = require('../models');
const tokenExists = require('../utils/validationToken');
const utils = require('../utils/validationUser');

const getAll = async (token) => {
  tokenExists.validationToken(token);
  console.log('oiii');
  const findAll = await User.findAll();
  return findAll;
};

const getById = async (token, { id }) => {
  tokenExists.validationToken(token);
  const result = utils.existsById(id);
  return result;
};

const deleteUser = async (token) => {
  const { id } = tokenExists.validationToken(token);
  await User.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getById,
  deleteUser,
};
