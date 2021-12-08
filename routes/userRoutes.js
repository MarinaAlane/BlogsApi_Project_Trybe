const router = require('express').Router();
const controller = require('../controllers/userController');
const validations = require('../middlewares/index');
  
  router.get('/', validations.validateJWT, controller.getAllUsers);
  router.post('/', validations.validateUser, controller.registerUser);

module.exports = router;