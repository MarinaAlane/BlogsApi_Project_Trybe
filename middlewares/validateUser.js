const Joi = require('joi');
const Users = require('../services/user');

const validateUserBody = async (req, res, next) => {
  const { error } = Joi.object({
    displayName: Joi.string().min(8),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    image: Joi.not().required(),
  }).validate(req.body);

  if (error) {
    return next(error);
  }

  next();
};

const validateUserRegister = async (req, res, next) => {
  const { email } = req.body;
  const findUser = await Users.findUserByEmail(email);

  if (findUser) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = {
  validateUserBody,
  validateUserRegister,
};
