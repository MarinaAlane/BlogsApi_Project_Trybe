const service = require('../services/userService');

const newUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const token = await service.newUser(displayName, email, password, image);
    return res.status(201).json({ token });
};

module.exports = {
    newUser,
};
