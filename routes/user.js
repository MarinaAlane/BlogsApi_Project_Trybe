const express = require('express');
const Users = require('../controllers/User');
const ErrorController = require('../controllers/Error');

const router = express.Router();

router.post('/', Users.create);
// router.get('/', Users.getAll);
// router.get('/:id', Users.getById);
// router.put('/:id', Users.update);
// router.delete('/:id', Users.remove);

router.use(ErrorController);

module.exports = router;
