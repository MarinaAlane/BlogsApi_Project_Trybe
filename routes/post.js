const route = require('express').Router();
const rescue = require('express-rescue');

const controller = require('../controllers/postController');

route.post('/', rescue(controller.createPost));
