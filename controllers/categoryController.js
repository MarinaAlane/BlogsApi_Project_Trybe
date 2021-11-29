const joi = require('joi');
const rescue = require('express-rescue');
const service = require('../services/categoryService');

const categoryRegister = rescue(async (req, res, next) => {
  const { error } = joi.object({
    name: joi.string().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { name } = req.body;
  const { email } = req.user;

  const result = await service.categoryRegister(name, email);
  if (result.error) return next(result.error);
  return res.status(201).json(result);
});

const getAllCategory = rescue(async (req, res, next) => {
  const { email } = req.user;
  
  const result = await service.getAllCategory(email);
  if (result.error) return next(result.error);
  return res.status(200).json(result);
});

module.exports = {
  categoryRegister,
  getAllCategory,
};