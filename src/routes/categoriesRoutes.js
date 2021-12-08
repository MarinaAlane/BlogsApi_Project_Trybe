const { Router } = require('express');
const categoriesCtrl = require('../controllers/categoriesController');

const categoriesRoutes = new Router();

categoriesRoutes.post('/', categoriesCtrl.createCategory);

module.exports = categoriesRoutes;