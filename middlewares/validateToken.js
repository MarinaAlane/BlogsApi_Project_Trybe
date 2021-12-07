const { validateToken } = require('../utils/token');

// References: // https://developer.mozilla.org/en-US/docs/Glossary/Request_header

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    
    if (!authorization) {
      return res.status(401).json({ message: 'Token dont exist' });
    }

    const { payload: { id } } = validateToken(authorization);
    req.userId = id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
