const { Router } = require('express');
const controller = require('../controllers/userController');
const { validaUser, validateUserRegistered } = require('../validations/userValidate');

const router = Router();

router.post('/', validaUser, validateUserRegistered, controller.create);

module.exports = router;