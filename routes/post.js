const route = require('express').Router();
const rescue = require('express-rescue');

const controller = require('../controllers/postController');

route.get('/:id', rescue(controller.getById));
route.get('/', rescue(controller.getAll));
route.post('/', rescue(controller.createPost));
route.put('/:id', rescue(controller.updatePost));
route.delete('/:id', rescue(controller.deletePost));

module.exports = route;
