const service = require('../../services/user');
const { badRequest, conflict } = require('../../utils/codes');
const {
  required,
  length,
  invalidEmail,
  existingEmail,
  empty,
  invalidFields,
} = require('../../utils/errMsg');

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName) return res.status(badRequest).json(required('displayName'));
  if (displayName.length < 8) return res.status(badRequest).json(length('displayName', '8'));
  return next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  switch (true) {
    case typeof password !== 'string':
      return res.status(badRequest).json(required('password'));
    case password.length === 0:
      return res.status(badRequest).json(empty('password'));
    case password.length < 6:
      return res.status(badRequest).json(length('password', '6'));
    default:
      return next();
  }
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  switch (true) {
    case typeof email !== 'string':
      return res.status(badRequest).json(required('email'));
    case email.length === 0:
      return res.status(badRequest).json(empty('email'));
    case !regex.test(email):
      return res.status(badRequest).json(invalidEmail);
    default:
      return next();
  }
};

const verifyEmail = async (req, res, next) => {
  const { body: { email }, originalUrl } = req;
  const verifiedEmail = await service.findEmail(email);
  if (originalUrl.includes('login')) {
    return !verifiedEmail ? res.status(badRequest).json(invalidFields) : next();
  }
  return !verifiedEmail ? next() : res.status(conflict).json(existingEmail);
};

module.exports = {
  validateDisplayName,
  validatePassword,
  validateEmail,
  verifyEmail,
};
