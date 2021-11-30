const userError = {
  alreadyExists: {
    code: 409,
    message: 'User already registered',
  },
  invalidDisplayName: {
    code: 400,
    message: '"displayName" length must be at least 8 characters long',
  },
  invalidEmail: {
    code: 400,
    message: '"email" must be a valid email',
  },
  requiredEmail: {
    code: 400,
    message: '"email" is required',
  },
  invalidPassword: {
    code: 400,
    message: '"password" length must be 6 characters long',
  },
  requiredPassword: {
    code: 400,
    message: '"password" is required',
  },
};

module.exports = {
  userError,
};
