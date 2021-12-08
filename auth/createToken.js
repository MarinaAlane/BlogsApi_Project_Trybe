require('dotenv').config();
const jwt = require('jsonwebtoken');

const createToken = (login) => {
  try {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };  
  const token = jwt.sign({ login }, process.env.JWT_SECRET, jwtConfig);
  return { token };
  } catch (error) {
    return error.message;
  }
};

module.exports = createToken;
