const validate = require('../validations/postValidations');

module.exports = (req, _res, next) => {
  validate.createPost(req.body);
  next();
};
