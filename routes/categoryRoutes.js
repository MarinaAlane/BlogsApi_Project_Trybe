const express = require('express');
const rescue = require('express-rescue');
const categoryController = require('../controllers/categoryController');
const { validateCategory, validateToken } = require('../middlewares');

const router = express.Router();

router
  .post('/categories',
    rescue(validateCategory),
    rescue(validateToken),
    rescue(categoryController.createCategory))
  .get('/categories',
    rescue(validateToken),
    rescue(categoryController.getCategories));

module.exports = router;
