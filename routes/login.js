const route = require('express').Router();
const rescue = require('express').rescue();

const controller = require('../controllers/loginController');

route.post('/login', rescue(controller.login));

module.exports = route;
