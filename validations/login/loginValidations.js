const errors = require('../errors');

const isMissingEmail = (email) => {
  const { emptyEmail } = errors;
  if (email === '') return emptyEmail;
};

const isMissingPassword = (password) => {
  const { emptyPassword } = errors;
  if (password === '') return emptyPassword;
};

const isNotValidEmail = (email) => {
  const { missingEmail } = errors;
  if (!email) return missingEmail;
};

const isNotValidPassword = (password) => {
  const { missingPassword } = errors;
  if (!password) return missingPassword;
};

const validateLogin = (email, password) => {
  if (isMissingEmail(email)) return isMissingEmail(email);
  if (isMissingPassword(password)) return isMissingPassword(password);
  if (isNotValidEmail(email)) return isNotValidEmail(email);
  if (isNotValidPassword(password)) return isNotValidPassword(password);
};

module.exports = { validateLogin };