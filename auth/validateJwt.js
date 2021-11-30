const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const user = await User.findOne({ where: { email: decoded.email } });
    
    req.user = user;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};