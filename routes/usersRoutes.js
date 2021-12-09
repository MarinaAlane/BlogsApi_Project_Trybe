const router = require('express').Router();
const { createNewUser, listAllUsers } = require('../controllers/usersController');

router.post('/', createNewUser);
router.get('/', listAllUsers);

module.exports = router;