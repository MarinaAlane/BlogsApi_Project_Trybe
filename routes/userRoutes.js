const express = require('express');

const { userValidation } = require('../validations');

const { createUser, listUsers } = require('../controllers/userController');

require('dotenv').config();

const userRouter = express.Router();

// Requisito 1 - ROTA USER - POST
userRouter.post('/', userValidation, createUser);

// Requisito 3 - ROTA USER - GET
userRouter.get('/', listUsers);

module.exports = userRouter;