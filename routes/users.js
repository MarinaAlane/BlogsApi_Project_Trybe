const route = require('express').Router();
const rescue = require('express-rescue');

const createUserController = require('../controllers/createUserController.js');

const controller = require('../controllers/userController.js');

route.post('/', rescue(createUserController.cadastration));
route.get('/', rescue(controller.getAll));
route.get('/:id', rescue(controller.getById));
route.delete('/', rescue(controller.deleteUser));

module.exports = route;
