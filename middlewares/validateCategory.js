const Joi = require('joi');
const Categories = require('../services/categories');

const validateCategoryBody = async (req, res, next) => {
  const { error } = Joi.object({ 
    name: Joi.string().required(),
  }).validate(req.body);

  if (error) {
    return next(error);
  }

  next();
};

const validateCategoryRegister = async (req, res, next) => {
  const { name } = req.body;
  const findCategory = await Categories.findCategoryByName(name);

  if (findCategory) {
    return res.status(409)
      .json({ message: 'Category already registered' });
  }

  next();
};

module.exports = {
  validateCategoryBody,
  validateCategoryRegister,
};
