const jwt = require('../utils');

const userLogin = async (email) => {
  const token = await jwt.create(email);
  return { token };
};

module.exports = { userLogin };