const express = require('express');
const rescue = require('express-rescue');
const controller = require('../controllers/loginControllers');
const { loginMiddlewares } = require('../middlewares/loginMiddlewares');

const router = express.Router();

router.post('/', loginMiddlewares.validateLogin, rescue(controller.loginControllers));

module.exports = router;