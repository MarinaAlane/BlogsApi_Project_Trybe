const jwt = require('jsonwebtoken');
const { HTTP_UNAUTHORIZED_STATUS } = require('../../utils/statusCode');

const tokenIsValid = (token) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (error) {
    return false;
  }
};

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'token not found' });
  }

  const payload = tokenIsValid(token);

  if (!payload) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'Expired or invalid token' });
  }
  req.user = payload;
  next();
};

module.exports = {
  validateToken,
};
