const jwt = require('jsonwebtoken');
const { getByProperty } = require('../services/userService');

const secret = 'jOrgetrybe21--';

const config = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const emptyToken = (value) => {
  if (!value || value === null || value === '') {
    return true;
  }
  return false;
};

const verifyToken = async (req, res, next) => {
  const tkn = req.headers.authorization;
  try {
    // console.log(tkn);
    if (emptyToken(tkn)) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const verified = jwt.verify(tkn, secret, config);
    const existUser = await getByProperty('email', verified.email);
    // console.log(verified.email);
    if (!existUser || existUser === null) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    next();  
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { verifyToken };