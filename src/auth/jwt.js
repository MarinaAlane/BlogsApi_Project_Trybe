const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = 'secret';

const createJWT = (id, userEmail) => {
  console.log(id, userEmail);
  const jwtConfig = { 
    expiresIn: '4d',
    algorithm: 'HS256',
  };

const jsonwebtoken = jwt.sign({ payload: { id, userEmail } }, secret, jwtConfig);
return jsonwebtoken;
};

const verifyJWT = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

module.exports = { createJWT, verifyJWT };