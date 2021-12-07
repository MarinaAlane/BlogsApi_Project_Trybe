const Joi = require('joi');

const validateLogin = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().not().empty().required(),
    password: Joi.string().not().empty().required(),
  }).validate(req.body);

  if (error) return next(error);
  next();
};

module.exports = {
  validateLogin,
};
