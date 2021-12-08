const router = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controller/userController');
const { newUserValidation,
  loginValidation, tokenValidation } = require('../middlewares/validation');

router.post('/user', rescue(newUserValidation), rescue(controller.createUser));
router.get('/user', rescue(tokenValidation), rescue(controller.findUsers));
router.post('/login', rescue(loginValidation), rescue(controller.login));

module.exports = router;
