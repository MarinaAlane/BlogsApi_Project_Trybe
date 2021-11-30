const route = require('express').Router();
const rescue = require('express').rescue();

const controller = require('../controllers/userController.js');

route.get('/', rescue(controller.Cadastration));

module.exports = route;
