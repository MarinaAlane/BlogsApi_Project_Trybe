const route = require('express').Router();
const rescue = require('express-rescue');

const controller = require('../controllers/createUserController.js');

route.post('/', rescue(controller.cadastration));

module.exports = route;
