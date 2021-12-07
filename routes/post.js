const route = require('express').Router();
const rescue = require('express-rescue');

const controller = require('../controllers/postController');

route.get('/', rescue(controller.getById));
route.get('/', rescue(controller.getAll));
route.post('/', rescue(controller.createPost));
route.put('/', rescue(controller.updatePost));
route.delete('/', rescue(controller.deletePost));
