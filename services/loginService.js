const { Users } = require('../models');

const validateUser = async ({ email, password }) => {
  const result = await Users.findOne({ where: { email } });
  if (result && result.password === password) {
    return Users;
  }
  return null; 
};

module.exports = {
  validateUser,
};