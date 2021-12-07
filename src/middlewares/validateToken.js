const { validateToken } = require('../utils/token');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers; // https://developer.mozilla.org/en-US/docs/Glossary/Request_header
    if (!authorization) return res.status(401).json({ message: 'Token dont exist' });
    const { payload: { id } } = validateToken(authorization);
    req.userId = id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
