const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, secret);
    req.userInfo = payload;
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  jwtValidation,
};