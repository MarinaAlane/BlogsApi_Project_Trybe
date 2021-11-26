const jwt = require('jsonwebtoken');
const error = require('../utils/errors');

const secret = process.env.JWT_SECRET;

function validateToken(req, _res, next) {
  const { authorization } = req.headers;
  if (!authorization) throw error.tokenNotFound;
  try {
    const data = jwt.verify(authorization, secret);
    req.jwtData = data;

    next();
  } catch (e) {
    throw error.tokenMalformed;
  }
}

module.exports = validateToken;