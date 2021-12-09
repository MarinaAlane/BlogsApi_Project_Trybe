require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const jwtSecret = process.env.JWT_SECRET || 'secret';

// Requisito 3
const tokenValidation = async (req, res, next) => {
    const token = req.headers.authorization;
    // Req 03 - Se o token for inexistente o resultado retornado deverá ser um status http 401:
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const decoded = jwt.verify(token, jwtSecret);
        // console.log(decoded);
        // console.log(decoded.data);
        const { email } = decoded.data;
        const user = await User.findOne({ where: { email } });
        // Req 03 - Se o token for inválido o resultado retornado deverá ser um status http 401:
        if (!user) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    tokenValidation,
};