const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

/* REF: https://imasters.com.br/desenvolvimento/json-web-token-conhecendo-o-jwt-na-teoria-e-na-pratica*/
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  else if(token) {
   jwt.verify(token, secret, function(err, decoded) {
    if (err) {
      return res.status(401).json({ message: 'Expired or invalid token' }); 
    } else {
      req.decoded = decoded; 
      next();
  }}
)}};