const statusCodes = require('./statusCodes');

module.exports = {
  user: {
    invalidNameLength: {
      statusCode: statusCodes.badRequest,
      message: '"displayName" length must be at least 8 characters long',
    },
    requiredEmail: {
      statusCode: statusCodes.badRequest,
      message: '"email" is required',
    },
    invalidEmail: {
      statusCode: statusCodes.badRequest,
      message: '"email" must be a valid email',
    },
    requiredPassword: {
      statusCode: statusCodes.badRequest,
      message: '"password" is required',
    },
    invalidPasswordLength: {
      statusCode: statusCodes.badRequest,
      message: '"password" length must be 6 characters long',
    },
    alreadyExists: {
      statusCode: statusCodes.conflict,
      message: 'User already registered',
    },
    notFound: {
      statusCode: statusCodes.notFound,
      message: 'User does not exist',
    },
  },
  login: {
    invalidFields: {
      statusCode: statusCodes.badRequest,
      message: 'Invalid fields',
    },
    requiredEmail: {
      statusCode: statusCodes.badRequest,
      message: '"email" is required',
    },
    emptyEmail: {
      statusCode: statusCodes.badRequest,
      message: '"email" is not allowed to be empty',
    },
    requiredPassword: {
      statusCode: statusCodes.badRequest,
      message: '"password" is required',
    },
    emptyPassword: {
      statusCode: statusCodes.badRequest,
      message: '"password" is not allowed to be empty',
    },
  },
  auth: {
    notFound: {
      statusCode: statusCodes.unauthorized,
      message: 'Token not found',
    },
    invalidJWT: {
      statusCode: statusCodes.unauthorized,
      message: 'Expired or invalid token',
    },
  },
  category: {
    requiredName: {
      statusCode: statusCodes.badRequest,
      message: '"name" is required',
    },
  },
  post: {
    categoryNotFound: {
      statusCode: statusCodes.badRequest,
      message: '"categoryIds" not found',
    },
    notFound: {
      statusCode: statusCodes.notFound,
      message: 'Post does not exist',
    },
    unauthorizedUser: {
      statusCode: statusCodes.unauthorized,
      message: 'Unauthorized user',
    },
    categoryUpdate: {
      statusCode: statusCodes.badRequest,
      message: 'Categories cannot be edited',
    },
  },
  requiredField: (field) => ({
    statusCode: statusCodes.badRequest,
    message: `"${field}" is required`,
  }),
};