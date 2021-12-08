const route = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/categoriesController');

route.post('/', rescue(controller.createCategorie));
route.get('/', rescue(controller.getAll));

module.exports = route;
