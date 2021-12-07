const jwt = require('jsonwebtoken');
const userService = require('../services/usersService');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    await userService.createUser({ displayName, email, password, image });

    const token = jwt.sign({ displayName, email }, process.env.JWT_SECRET);

    return res.status(201).json({ token });
};
module.exports = { createUser };
