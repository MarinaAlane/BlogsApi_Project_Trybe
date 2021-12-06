const express = require('express');

const userController = require('../controllers/userController');

const userValidator = require('../middlewares/validations/userValidator');

const userRouter = express.Router();

userRouter.post('/', userValidator, userController.create);

module.exports = userRouter;