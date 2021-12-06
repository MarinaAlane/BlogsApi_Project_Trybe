const router = require('express').Router();
const authToken = require('../auth/authUser');
const { createCategorie, getCategories } = require('../controllers/categoriesController');
const { validateCategorieField } = require('../middlewares/categorieMiddlewares');

router.post('/categories', authToken, validateCategorieField, createCategorie);
router.get('/categories', authToken, getCategories);

module.exports = router;