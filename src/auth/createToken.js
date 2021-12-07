const jwt = require('jsonwebtoken');

module.exports = (user) => {
  const jwtConfig = { expiresIn: '2d', algorithm: 'HS256' };
  const secret = process.env.JWT_SECRET;
  const { id, email } = user;

  return jwt.sign({ id, email }, secret, jwtConfig);
};