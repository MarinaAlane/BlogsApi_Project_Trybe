const Users = require('../services/usersService');

const createNewUser = async (req, res) => {
    try {
        const { email, password, displayName, image } = req.body;
        const userInfo = await Users.createNewUser({ email, password, displayName, image });
        if (userInfo.err) {
            return res.status(userInfo.err.code).json(userInfo.err.message);
        }
        // Req. 01 - Se o usuário for criado com sucesso o resultado retornado deverá ser um status http 201:
        return res.status(201).json(userInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong. Try again later' });
    }
};

module.exports = { createNewUser };