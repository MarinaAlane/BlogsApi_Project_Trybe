const router = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controller/userController');
const { newUserValidation } = require('../middlewares/validation');

router.post('/user', rescue(newUserValidation), rescue(controller.createUser));

module.exports = router;
