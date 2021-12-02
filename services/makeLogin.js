const model = ();
const utils = require('../utils/validationLogin');

const makelogin = ({ email, password }) => {
  utils.validationLogin(email, password)
};

module.exports = {
  makelogin,
};