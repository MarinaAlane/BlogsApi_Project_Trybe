const { StatusCodes } = require('http-status-codes');
const { Categories } = require('../models');

const createCategory = async ({ name }) => {
  if (!name) {
    return { status: StatusCodes.BAD_REQUEST, message: '"name" is required' };
  }

  const user = await Categories.createCategory({ name });
  return { status: StatusCodes.CREATED, user };
};

module.exports = {
  createCategory,
};