const jwt = require('jsonwebtoken');

 const validateToken = async (req, res, next) => {
   const token = req.headers.authorization;
   if (!token || token.length === 0) return res.status(401).json({ message: 'Token not found' });
   try {
     jwt.verify(token, process.env.JWT_SECRET);
    //  console.log('payload', payload);
     next();
   } catch (err) {
    //  console.log('validateToken', err.message);
     return res.status(401).json({ message: 'Expired or invalid token' });
   }
 };

 module.exports = { validateToken };