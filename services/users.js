const { User } = require('../models');
const validationToken = require('../utils/validationToken');

const getAll = async ({ token }) => {
  validationToken(token);
  const findAll = await User.findAll();
  return ({ findAll });
};

module.exports = {
  getAll,
  getById,
};
