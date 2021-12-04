const router = require('express').Router();
const categoriesController = require('../controllers/categoriesController');
const categoriesValidations = require('../Validations/categoriesValidations');
const tokenValidation = require('../Validations/tokenValidation');

router.post('/', tokenValidation, categoriesValidations, categoriesController.createCategories);

module.exports = router;