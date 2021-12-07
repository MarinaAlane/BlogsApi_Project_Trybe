const express = require('express');
const Categorie = require('../controllers/Categorie');
const Authentication = require('../middlewares/Authenticate');

const router = express.Router();
router.use(express.json());

router.post('/', Authentication, Categorie.create);
router.get('/', Authentication, Categorie.getAll);

module.exports = router;