const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/userController');
const { validateNewUser, validateLogin, validateToken } = require('../middlewares');

const router = express.Router();

router
  .post('/user', rescue(validateNewUser), rescue(userController.createUser))
  .post('/login', rescue(validateLogin), rescue(userController.login))
  .delete('/user/me', rescue(validateToken), rescue(userController.deleteUser))
  .get('/user/:id', rescue(validateToken), rescue(userController.getUser))
  .get('/user', rescue(validateToken), rescue(userController.getUsers));

module.exports = router;
