const router = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controller/categoryController');
const { tokenValidation, newCategoryValidation } = require('../middlewares/validation');

router.post('/categories', rescue(tokenValidation),
  rescue(newCategoryValidation), rescue(controller.createCategory));
router.get('/categories', rescue(tokenValidation), rescue(controller.getAllCategories));

module.exports = router;
