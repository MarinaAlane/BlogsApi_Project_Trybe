const router = require('express').Router();
const controller = require('../controller/userController');
const { isPasswordValid } = require('../middlewares/validation');

router.post('/user', isPasswordValid, controller.createUser);

module.exports = router;