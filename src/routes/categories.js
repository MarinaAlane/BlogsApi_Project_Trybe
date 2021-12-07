const router = require('express').Router();

const categoriesController = require('../controllers/categoriesController');

const { tokenExists, tokenValid } = require('../middlewares/validations');

router.get('/', tokenExists, tokenValid, categoriesController.getAll);

module.exports = router;