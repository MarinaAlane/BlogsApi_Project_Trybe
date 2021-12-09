const usersService = require('../services/usersService');

// Requisito 1
const createNewUser = async (req, res) => {
    try {
        const { email, password, displayName, image } = req.body;
        const userInfo = await usersService.createNewUser({ email, password, displayName, image });
        if (userInfo.err) {
            return res.status(userInfo.err.code).json(userInfo.err.message);
        }
        // Req. 01 - Se o usuário for criado com sucesso o resultado retornado deverá ser um status http 201:
        return res.status(201).json(userInfo);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong. Try again later' });
    }
};

// Requisito 2
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const loginInfo = await usersService.login({ email, password });
        if (loginInfo.err) {
            return res.status(loginInfo.err.code).json(loginInfo.err.message);
        }
        // Req. 02 - Se o login foi feito com sucesso o resultado retornado deverá ser um status http 200:
        return res.status(200).json(loginInfo);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong. Try again later' });
    }
};

// Requisito 3
const listAllUsers = async (req, res) => {
    try {
        // Req. 03 - Ao listar usuários com sucesso o resultado retornado deverá ser um status http 200:
        const allUsers = await usersService.listAllUsers();
        return res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong. Try again later' });
    }
};

// Requisito 4
const listUserById = async (req, res) => {
    // Req. 04 - Ao listar um usuário com sucesso o resultado retornado deverá ser um status http 200:
    try {
        const userById = await usersService.listUserById(req.params.id);
        if (userById.err) {
            return res.status(userById.err.code).json(userById.err.message);
        }
        return res.status(200).json(userById);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong. Try again later' });
    }
};

module.exports = {
    createNewUser,
    login,
    listAllUsers,
    listUserById,
};