const { Category } = require('../models');

const getCategories = () => 
  Category.findAll();

const newCategory = (payload) =>
  Category.create(payload);

module.exports = {
  getCategories,
  newCategory,
};
