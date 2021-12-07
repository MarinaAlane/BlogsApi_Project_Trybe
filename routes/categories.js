const express = require('express');
const validateToken = require('../middlewares/validateToken');
const newCategoryMiddleware = require('../middlewares/validateCategory');
const Categories = require('../controllers/categories');

const route = express.Router();

route.post('/',
  validateToken,
  newCategoryMiddleware.validateCategoryBody,
  newCategoryMiddleware.validateCategoryRegister,
  Categories.create);

route.get('/',
  validateToken,
  Categories.findAll);

module.exports = route;
