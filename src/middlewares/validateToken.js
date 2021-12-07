const { validateToken } = require('../utils/token');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'There is no token' });
    }

    const { payload: { id } } = validateToken(authorization);
    req.userId = id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};