const router = require('express').Router();
const { createNewUser } = require('../controllers/usersController');

router.post('/', createNewUser);

module.exports = router;