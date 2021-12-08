const { validateUser } = require('./userMiddlewares');
const { loginMiddlewares } = require('./loginMiddlewares');
const { validateJWT } = require('./ValidateJWT');
const { registerCategoryValidation } = require('./categoryMiddlewares');
const { postValidation } = require('./BlogPostsMiddlewares');

module.exports = {
  validateUser,
  loginMiddlewares,
  validateJWT,
  registerCategoryValidation,
  postValidation,
};