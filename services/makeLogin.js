const utils = require('../utils/validationLogin');

const makelogin = async ({ email, password }) => {
  const token = await utils.validationLogin(email, password);
  return token;
};

module.exports = {
  makelogin,
};