const jwt = require('jsonwebtoken');

const PASSWORD = process.env.PASSWORD || '123';
const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};
const newToken = (dataUser) => {
  const generateToken = jwt.sign(dataUser, PASSWORD, jwtConfig);
  return { token: generateToken };
};

const tokenValidate = (request, response, next) => {
  try {  
  const tokenReceived = request.headers.authorization;
  if (!tokenReceived) {
    return response.status(401).json({ message: 'Token not found' });
  }
  const tokenVerified = jwt.verify(tokenReceived, PASSWORD);
    response.user = tokenVerified;
    next();
  } catch (err) {
    return response.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  newToken,
  tokenValidate,
};