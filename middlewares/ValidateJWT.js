const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'secretoken';

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  try {
    if (!token) return res.status(401).json({ message: 'Token not found' });

    const { email } = jwt.verify(token, secret);

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json({ message: 'Expired or invalid token' });

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};