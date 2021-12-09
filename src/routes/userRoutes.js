const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/userController');
const validateNewUser = require('../middlewares/validateNewUser');
const validateLogin = require('../middlewares/validateLogin');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router
  .post('/user',
    rescue(validateNewUser),
    rescue(userController.newUser))
  .post('/login',
    rescue(validateLogin),
    rescue(userController.login))
  .delete('/user/me',
    rescue(validateToken),
    rescue(userController.deleteMe))
  .get('/user/:id',
    rescue(validateToken),
    rescue(userController.getUser))
  .get('/user',
    rescue(validateToken),
    rescue(userController.getUsers));

module.exports = router;
