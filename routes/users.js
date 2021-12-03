const route = require('express').Router();
const rescue = require('express-rescue');

const controller = require('../controllers/userController.js');

route.get('/', rescue(controller.getAll));

module.exports = route;
