const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const err = (statusCode) => ({ statusCode });

const verificationToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw err({ statusCode: 401, message: 'Expired or invalid token' });
  }
};

const tokenExists = (token) => {
  if (!token) throw err({ statusCode: 401, message: 'Token not found' });
};

const validationToken = (token) => {
  console.log('validationtoken');
  tokenExists(token);
  const payload = verificationToken(token);
  return payload;
};

module.exports = {
  validationToken,
};
