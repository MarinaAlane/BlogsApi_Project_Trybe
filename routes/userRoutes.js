const router = require('express').Router();
const controller = require('../controllers/userController');
const validations = require('../middlewares/index');

  router.post('/', validations.validateUser, controller.registerUser);

module.exports = router;