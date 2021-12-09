// error codes index

module.exports = {
  displayNameError: { message: '"displayName" is required', status: 400 },

  invalidName: { message: '"displayName" length must be at least 8 characters long', status: 400 },

  emailRequired: { message: '"email" is required', status: 400 },

  invalidEmail: { message: '"email" must be a valid email', status: 400 },

  passwordRequired: { message: '"password" is required', status: 400 },

  invalidPassword: { message: '"password" length must be 6 characters long', status: 400 },

  alreadyRegistered: { message: 'User already registered', status: 409 },

  invalidFields: { message: 'Invalid fields', status: 400 },

  notEmptyEmailAllowed: { message: '"email" is not allowed to be empty', status: 400 },

  notPassEmptyAllowed: { message: '"password" is not allowed to be empty', status: 400 },

  invalidToken: { message: 'Expired or invalid token', status: 401 },

  tokenError: { message: 'Token not found', status: 401 },

  userNotFound: { message: 'User does not exist', status: 404 },

  newCategoryError: { message: '"name" is required', status: 400 },

  titleError: { message: '"title" is required', status: 400 },

  contentError: { message: '"content" is required', status: 400 },

  categoryIDError: { message: '"categoryIds" is required', status: 400 },

  categoryExistsError: { message: '"categoryIds" not found', status: 400 },

  postNotFound: { message: 'Post does not exist', status: 404 },

  categoriesEditedError: { message: 'Categories cannot be edited', status: 400 },
  
  unauthorized: { message: 'Unauthorized user', status: 401 },
};
