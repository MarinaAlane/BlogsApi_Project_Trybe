const validation = require('../utils/validationUser');

const cadastration = ({ email, displayName, password }) => {
  validation.cadastration(email, displayName, password);
};

module.exports = {
  cadastration,
};