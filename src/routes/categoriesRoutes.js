const { Router } = require('express');
const categoriesCtrl = require('../controllers/categoriesController');
const validateJwt = require('../auth/validateJWT');
const validateMid = require('../middleware/categoriesMiddleware');

const categoriesRoutes = new Router();

categoriesRoutes.post('/',
  validateJwt,
  validateMid.validateName,
  categoriesCtrl.createCategory);

categoriesRoutes.get('/', validateJwt, categoriesCtrl.getAllCategories);

module.exports = categoriesRoutes;