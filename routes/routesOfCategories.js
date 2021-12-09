const router = require('express').Router();
const Categories = require('../controllers/Categories');
const { validateJWT } = require('../middlewares/rules');

router.post('/', validateJWT, Categories.create);

module.exports = router;
