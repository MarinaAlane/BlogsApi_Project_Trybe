const jwt = require('jsonwebtoken');
const userService = require('../services/usersService');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    await userService.createUser({ displayName, email, password, image });

    const token = jwt.sign({ displayName, email }, process.env.JWT_SECRET);
    req.headers.authorization = token;
    return res.status(201).json({ token });
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const { status, message } = await userService.validateNoLogin({ email, password });
    if (message) { return res.status(status).json({ message }); }
    const token = jwt.sign({ email, password }, process.env.JWT_SECRET);
    res.status(status).json({ token });
    };

const getUsers = async (req, res) => {
    const { status, users } = await userService.getUsers();
    return res.status(status).json(users);
};
module.exports = { createUser, loginUser, getUsers };
