const { validateUser } = require('./userMiddlewares');
const { loginValidation } = require('./loginMiddlewares');
const { validateJWT } = require('./ValidateJWT');

module.exports = {
  validateUser,
  loginValidation,
  validateJWT,
};