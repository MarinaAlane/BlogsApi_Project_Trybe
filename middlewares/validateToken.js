const jwt = require('jsonwebtoken');
const error = require('../utils/errorTemplates');

const secret = process.env.JWT_SECRET;

function validateToken(req, _res, next) {
  const { authorization } = req.headers;
  if (!authorization) throw error('tokenError');
  try {
    const data = jwt.verify(authorization, secret);
    req.token = data;
    next();
  } catch (e) {
    throw error('invalidToken');
  }
}

module.exports = validateToken;
