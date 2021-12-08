const { Categories } = require('../models');

const create = async (name) => Categories.create({ name });

module.exports = {
  create,
};