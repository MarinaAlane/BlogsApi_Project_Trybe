const express = require('express');

const userRouter = express.Router();

const controllerUsers = require('../controller/controllerUsers');

userRouter.post('/',
controllerUsers.validateDisplayName,
controllerUsers.validateEmail,
controllerUsers.verifyEmailExists,
controllerUsers.validatePassword,
controllerUsers.create);

userRouter.get('/',
controllerUsers.tokenExists,
controllerUsers.tokenIsValid,
controllerUsers.getAll);

module.exports = userRouter;