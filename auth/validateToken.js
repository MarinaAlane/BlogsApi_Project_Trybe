const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const verifyToken = (req, res, token) => {
  const decodedResult = jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return false; 
    }
    return decoded;    
  });
  if (decodedResult === false) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  req.decoded = decodedResult;
};

/*  REF: https://imasters.com.br/desenvolvimento/json-web-token-conhecendo-o-jwt-na-teoria-e-na-pratica */
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  } if (token) {
    verifyToken(req, res, token); 
    next();
  }
};
