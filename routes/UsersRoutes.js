const router = require('express').Router();
const { createUserController } = require('../controllers/UsersController');

router.post('/', createUserController);

module.exports = router;