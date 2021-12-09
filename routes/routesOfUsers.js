const router = require('express').Router();

const User = require('../controllers/controllerUser');
const {
  validateName,
  validateEmail,
  validatePassword,
  validateJWT,
} = require('../middlewares/rules');

router.post('/', validateName, validateEmail, validatePassword, User.create);
router.get('/', validateJWT, User.getAll);
router.get('/:id', validateJWT, User.getByID);

module.exports = router;
