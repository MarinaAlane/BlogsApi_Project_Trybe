require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findEmail } = require('../../services/user');
const { unauthorized } = require('../../utils/codes');
const { notFound } = require('../../utils/errMsg');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(unauthorized).json(notFound('Token'));
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = await findEmail(decoded.data.email);

    if (!user) {
      return res
        .status(unauthorized)
        .json({ message: 'Expired or invalid token' });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(unauthorized).json({ message: 'Expired or invalid token' });
  }
};