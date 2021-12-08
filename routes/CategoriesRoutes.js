const router = require('express').Router();
const Validations = require('../middlewares/index');
const CategoryController = require('../controllers/categoryController');

router.post('/', Validations.validateJWT, Validations.registerCategoryValidation, 
CategoryController.registerCategory);
router.get('/', Validations.validateJWT, CategoryController.getAll);

module.exports = router;