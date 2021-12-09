const utils = require('../utils/validationCategories');
const tokenExists = require('../utils/validationToken');
const { Category } = require('../models');

const createCategorie = async ({ name }, token) => {
  tokenExists.validationToken(token);
  const result = await utils.validationCategories(name);
  return result;
};

const getAll = async (token) => {
  tokenExists.validationToken(token);
  const result = await Category.findAll({});
  return result;
};

module.exports = {
  createCategorie,
  getAll,
};