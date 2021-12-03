const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = { expiresIn: '2d', algorithm: 'HS256' };

const generationToken = ({ id, email }) => jwt.sign({ id, email }, secret, jwtConfig);

module.exports = generationToken;