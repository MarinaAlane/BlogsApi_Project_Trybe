const router = require('express').Router();
const categoriesController = require('../controllers/categoriesController');
const validateToken = require('../auth/validateToken');

router.post('/', validateToken, categoriesController.addCategory);
router.get('/', validateToken, categoriesController.getAllCategories);

module.exports = router;
