const { Category } = require('../models');

const createCategory = (payload) =>
  Category.create(payload);

const getCategories = () => 
  Category.findAll();

module.exports = {
  createCategory,
  getCategories,
};
