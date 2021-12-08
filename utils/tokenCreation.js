require('dotenv').config();
const Jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const createToken = (displayName) => {
  const payload = {
    displayName,
  };
  const token = Jwt.sign(payload, SECRET, jwtConfig);
  return token;
};

module.exports = {
  createToken,
};
