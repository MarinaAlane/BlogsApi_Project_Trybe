const express = require('express');
const User = require('../controllers/User');
const Authentication = require('../middlewares/Authenticate');

const router = express.Router();
router.use(express.json());

router.post('/', User.create);
router.get('/:id', Authentication, User.getById);
router.get('/', Authentication, User.getAll);

module.exports = router;