const router = require('express').Router();

const categoriesController = require('../controllers/categoriesController');

const { tokenExists, tokenValid, checkNameCategory } = require('../middlewares/validations');

router.get('/', tokenExists, tokenValid, categoriesController.getAll);

router.post('/', tokenExists, tokenValid, checkNameCategory, categoriesController.createCategory);

module.exports = router;