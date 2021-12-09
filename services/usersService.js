const jwt = require('jsonwebtoken');
const { User } = require('../models');

const generateToken = (user, email) => {
    const secret = 'secret';
    const jwtConfig = {
        expiresIn: '8h',
        algorithm: 'HS256',
    };
    const { id } = user;
    const userInfoToken = { id, email };
    const token = jwt.sign({ data: userInfoToken }, secret, jwtConfig);
    return { token };
};

// Req. 01 - Se o usuário tiver o campo "displayName" menor que 8 caracteres o resultado retornado deverá ser um status http 400:
const checkDisplayName = (displayName) => {
    if (displayName.length < 8) {
        return {
            err:
            {
                code: 400,
                message: { message: '"displayName" length must be at least 8 characters long' },
            },
        };
    }
};

// Req. 01 - Se o usuário tiver o campo "password" menor ou maior que 6 caracteres o resultado retornado deverá ser um status http 400:
const checkPassword = (password) => {
    if (password.length !== 6) {
        return {
            err:
            {
                code: 400,
                message: { message: '"password" length must be 6 characters long' },
            },
        };
    }
};

// Requisito 1
const checkUserInfo = async (email, password, displayName) => {
    // Req. 01 - Se o usuário não tiver campo "email" o resultado retornado deverá ser um status http 400:
    if (!email) {
        return { err: { code: 400, message: { message: '"email" is required' } } };
    }
    // Req. 01 - Se o usuário não tiver campo "password" o resultado retornado deverá ser um status http 400:
    if (!password) {
        return { err: { code: 400, message: { message: '"password" is required' } } };
    }
    if (!displayName) {
        return { err: { code: 400, message: { message: '"displayName" is required' } } };
    }
    // Req. 01 - Se o usuário tiver o campo "email" com o formato email: "rubinho" ou "@gmail.com" o resultado retornado deverá ser um status http 400:
    const validEmail = /\S+@\S+\.\S+/;
    if (!validEmail.test(email)) {
        return { err: { code: 400, message: { message: '"email" must be a valid email' } } };
    }
};

// Requisito 1
const createNewUser = async ({ email, password, displayName, image }) => {
    // Req.01 - Será validado que é possível cadastrar um usuário com sucesso após as validações:
    if (await checkUserInfo(email, password, displayName)) {
        return checkUserInfo(email, password, displayName);
    }
    if (checkDisplayName(displayName)) return checkDisplayName(displayName);
    if (checkPassword(password)) return checkPassword(password);

    // Req. 01 - Se o usuário cadastrar o campo "email" com um email que já existe, o resultado retornado deverá ser um status http 409:
    const emailAlreadyExists = await User.findOne({ where: { email } });
    if (emailAlreadyExists) {
        return {
            err: { code: 409, message: { message: 'User already registered' } },
        };
    }

    // Req. 01 - Caso esteja tudo certo com o login, a resposta deve ser um token JWT:
    const user = await User.create({ email, password, displayName, image });
    const token = generateToken(user, email);
    return token;
};

// Requisito 2
const checkLoginInfo = (email, password) => {
    //  Req. 02 - Se o login não tiver o campo "email" o resultado retornado deverá ser um status http 400:
    if (!email) {
        return { err: { code: 400, message: { message: '"email" is required' } } };
    }
    // Req. 02 - Se o login não tiver o campo "password" o resultado retornado deverá ser um status http 400:
    if (!password) {
        return { err: { code: 400, message: { message: '"password" is required' } } };
    }
    // Req. 02 - Se o login tiver o campo "email" em branco o resultado retornado deverá ser um status http 400:
    if (email === '') {
        return { err: { code: 400, message: { message: '"email" is not allowed to be empty' } } };
    }
    // Req. 02 - Se o login tiver o campo "password" em branco o resultado retornado deverá ser um status http 400:
    if (password === '') {
        return {
            err: { code: 400, message: { message: '"password" is not allowed to be empty' } },
        };
    }
};

// Requisito 2
const login = async ({ email, password }) => {
    if (checkLoginInfo(email, password)) return checkLoginInfo(email, password);

    // Req. 02 - Se o login for com usuário inexistente o resultado retornado deverá ser um status http 400:
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
        return { err: { code: 400, message: { message: 'Invalid fields' } } };
    }

    // Req. 02 - Caso esteja tudo certo com o login, a resposta deve ser um token JWT:
    const token = generateToken(user, email);
    return token;
};

module.exports = {
    createNewUser,
    login,
};