const error = require('../utils/errorTemplates');

const validDisplayName = (name) => {
  if (!name) {
    throw error('displayNameError');
  }
  if (name.length < 8) {
    throw error('invalidName');
  }
};

const validEmail = (email) => {
  if (email === '') {
    throw error('notEmptyEmailAllowed');
  }
  if (!email) {
    throw error('emailRequired');
  }

  const regEx = /^\w+@\w[^]+\.com(\.br)?$/;
  const check = regEx.test(email);

  if (!check) {
    throw error('invalidEmail');
  }
};

const validPassword = (password) => {
  if (password === '') {
    throw error('notPassEmptyAllowed');
  }
  if (!password) {
    throw error('passwordRequired');
  }
  if (password.length !== 6) {
    throw error('invalidPassword');
  }
};

const newUserInformation = ({ displayName, email, password }) => {  
  validDisplayName(displayName);
  validEmail(email);
  validPassword(password);
};

const uniqueEmail = (user) => {
  if (user) {
    throw error('alreadyRegistered');
  }
};

const login = ({ email, password }) => {
  validEmail(email);
  validPassword(password);
};

const user = (payload) => {
  if (!payload) {
    throw error('invalidFields');
  }
};

const userById = (payload) => {
  if (!payload) {
    throw error('userNotFound');
  }
};

module.exports = {
  newUserInformation,
  uniqueEmail,
  login,
  user,
  userById,
};
