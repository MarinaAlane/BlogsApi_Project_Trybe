const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (user) => {  
  const config = {
    expiresIn: '30d',
    algorithm: 'HS256',
  };

  const { displayName, email, id } = user;

  return jwt.sign({ id, displayName, email }, JWT_SECRET, config);
};
