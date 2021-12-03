const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

const err = (statusCode) => ({ statusCode });

const verificationToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw err({ statusCode: 400, message: 'expired or invalid token' });
  }
};

const tokenExists = async (req, _res) => {
  const token = req.headers.authorization;
  if (!token) throw err({ statusCode: 401, message: '"token" not found' });
  verificationToken(token);
  return token;
};

module.exports = {
  tokenExists,
};