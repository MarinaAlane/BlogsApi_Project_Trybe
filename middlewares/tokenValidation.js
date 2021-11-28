require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require('../models');

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
        
    const checkTokenAlreadyExists = await db.Users.findOne({
      where: { email: decodedToken.login.email },
    });
    
    if (!checkTokenAlreadyExists) {
      return res.status(401).json({ message: 'Token not found' });
    }
   next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenValidation;
