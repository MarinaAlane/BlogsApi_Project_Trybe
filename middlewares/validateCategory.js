const validate = require('../validations/categoryValidations');

module.exports = (req, _res, next) => {
  validate.createCategory(req.body);
  next();
};
