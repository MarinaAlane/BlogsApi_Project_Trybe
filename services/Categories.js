const { Categories } = require('../models');

const serverError = 'Something went wrong';

const create = async (categoryData) => {
  try {
    const response = await Categories.create(categoryData);
    return response;
  } catch (e) {
    return { error: serverError };
  }
};

const getAll = async () => {
  try {
    const response = await Categories.findAll({ raw: true });   
    return response;
  } catch (e) {
    return { error: serverError };
  }
};

const getById = async (id) => {
  try {
    const response = await Categories.findOne({ where: { id }, raw: true });
    if (!response) {
      return null;
    }
    return response;
  } catch (e) {
    return { error: serverError };
  }
};

module.exports = {
  create,
  getAll,
  getById,
};