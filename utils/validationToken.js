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

const tokenExists = (token) => {
  if (!token) throw err({ statusCode: 401, message: '"token" not found' });
};

const validationToken = (token) => {
  tokenExists(token);
  const payload = verificationToken(token);
  return payload;
};

module.exports = {
  validationToken,
};
