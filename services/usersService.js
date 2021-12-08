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

const verifyUserInfo = async (email, password, displayName) => {
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

const createNewUser = async ({ email, password, displayName, image }) => {
    if (await verifyUserInfo(email, password, displayName)) {
        return verifyUserInfo(email, password, displayName);
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

    const user = await User.create({ email, password, displayName, image });
    const token = generateToken(user, email);
    return token;
};

module.exports = { createNewUser };