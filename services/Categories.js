const { Categories } = require('../models');

const serverError = 'Something went wrong';

const create = async (categoryData) => {
  try {
    const response = await Categories.create({ name: categoryData });
    console.log(response);
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

module.exports = {
  create,
  getAll,
};

// requesito 6 foi concluído com a ajuda do Vinicius Gouveia.