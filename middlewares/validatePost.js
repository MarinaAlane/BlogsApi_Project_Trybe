const Joi = require('joi');
const Categories = require('../services/categories');

const validatePostBody = async (req, _res, next) => {
  const { error } = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  }).validate(req.body);

  if (error) {
    return next(error);
  }
  
  next();
};

const validatePostRegister = async (req, res, next) => {
  const { categoryIds } = req.body;

  const listCategories = await Promise.all(
    categoryIds.map(async (id) => Categories.findCategoryById(id)),
  );

  if (listCategories.some((category) => !category)) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};

module.exports = {
  validatePostBody,
  validatePostRegister,
};
