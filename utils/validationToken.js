const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

const err = (statusCode) => ({ statusCode });

const verificationToken = async (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw err({ statusCode: 400,  })
  }
};
