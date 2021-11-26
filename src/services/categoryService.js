const { Category } = require('../models');

const messageErrorServer = 'Internal Error Server';

const createCategory = async (name) => {
  if (!name) return { code: 400, result: { message: '"name" is required' } };
  try {
    const categoryCreated = await Category.create(name);
    return { code: 201, result: categoryCreated };
  } catch (error) {
    return { code: 500, result: { message: messageErrorServer } };
  }
};

module.exports = {
  createCategory,
};