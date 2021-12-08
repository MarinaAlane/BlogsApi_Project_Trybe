const router = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controller/userController');
const { newUserValidation, loginValidation } = require('../middlewares/validation');

router.post('/user', rescue(newUserValidation), rescue(controller.createUser));
router.post('/login', rescue(loginValidation), rescue(controller.login));

module.exports = router;
