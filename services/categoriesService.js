const { Category } = require('../models');
const { validateCategory } = require('../validations/categories/categoryValidation');

const getAllCategories = async () => {
console.log(Category);
  const allCategories = await Category.findAll();

  return allCategories;
};

const addCategory = async (name) => {
  const isNotValidCategoryName = validateCategory(name);

  if (isNotValidCategoryName) return isNotValidCategoryName;
  const countCategories = await getAllCategories();
  return { code: '201', categoryData: { id: countCategories.length + 1, name } };  
};

module.exports = {
  addCategory,
  getAllCategories,
};
