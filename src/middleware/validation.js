const Joi = require('joi');
const { user } = require('../../models');

const newUser = (displayName, email, password) => {
  const { error } = Joi.object({
    displayName: Joi.string()
      .min(8)
      .required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).rule({
      message: '"password" length must be 6 characters long',
    }).required(),
  }).validate({ displayName, email, password });
  
  if (error) {
    error.code = 400;
    throw error;
  }
};

const alreadyExist = async (email) => {
  const exists = await user.findOne({ where: { email } });
  if (exists) {
    const error = new Error('User already registered');
    error.code = 409;
    throw error;
  }
  return null;
};

module.exports = {
    newUser,
    alreadyExist,
};
