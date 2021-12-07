const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET;
  
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {    
    jwt.verify(token, secret);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  } 
};

module.exports = validateToken;
