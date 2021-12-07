const { validateToken } = require('../utils/token');

module.exports = (req, res, next) => {
  // References: https://developer.mozilla.org/en-US/docs/Glossary/Request_header
  try {
    const { authorization } = req.headers;
    
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
  
    const { payload: { id } } = validateToken(authorization);
    req.userId = id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};
