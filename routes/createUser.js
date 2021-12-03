const route = require('express').Router();
const rescue = require('express').rescue();

const controller = require('../controllers/userController.js');

route.post('/', rescue(controller.Cadastration));

module.exports = route;
