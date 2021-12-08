const router = require('express').Router();
const validations = require('../middlewares/index');
const categoryController = require('../controllers/categoryControllers');

router.post('/', validations.validateJWT, validations.registerCategoryValidation, 
categoryController.registerCategory);

module.exports = router;