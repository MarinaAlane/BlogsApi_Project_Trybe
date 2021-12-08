const { badRequest } = require('../../utils/codes');
const { required } = require('../../utils/errMsg');
const categoryService = require('../../services/category');

const validateTitle = (req, res, next) => {
  const { title } = req.body;
  return title ? next() : res.status(badRequest).json(required('title'));
};

const validateContent = (req, res, next) => {
  const { content } = req.body;
  return content ? next() : res.status(badRequest).json(required('content'));
};

const validateCategoryId = (req, res, next) => {
  const { categoryIds } = req.body;
  return categoryIds ? next() : res.status(badRequest).json(required('categoryIds'));
};

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categories = await categoryService.getIds();
  const categoriesIds = categories.map((e) => e.id);
  const isValid = categoryIds.every((id) => categoriesIds.includes(id));
  return isValid ? next() : res.status(badRequest).json({
    message: '"categoryIds" not found',
  });
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategoryId,
  validateCategory,
};