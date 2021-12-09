const router = require('express').Router();
const UserController = require('../controllers/userController');
const Validations = require('../middlewares/validateUser');

router.post('/', Validations.loginValidate, UserController.login);

module.exports = router;
