const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validateJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  const decoded = jwt.verify(token, secret);
  console.log(decoded);
  next();
};

module.exports = validateJWT;