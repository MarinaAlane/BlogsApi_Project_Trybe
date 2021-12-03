const route = require('express').Router();
const rescue = require('express-rescue');

const controller = require('../controllers/userController.js');

route.get('/', rescue(controller.getAll));
route.get('/id', rescue(controller.getById));

module.exports = route;
