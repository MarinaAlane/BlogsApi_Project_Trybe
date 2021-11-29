const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.token = token;
    req.userId = decode.userId;
    req.email = decode.email;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
