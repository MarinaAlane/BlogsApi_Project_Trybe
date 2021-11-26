const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'my-hardcoded-secret';

const isValidEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const generateToken = (user) => {
  const token = jwt.sign(user, secret);
  return token;
};

const createUser = async (data) => {
  try {
    const { displayName, email, password, image } = data;

    if (!isValidEmail(email)) {
      return { message: '"email" must be a valid email', status: 400 };
    }

    const userAlreadyExits = await User.findOne({ where: {
      email,
    } });

    if (userAlreadyExits !== null) {
      return { message: 'User already registered', status: 409 };
    }

    const newUser = await User.create({ displayName, email, password, image });

    return { token: generateToken({ email: newUser.email }) };
  } catch (error) {
    console.log(error.message);

    return { message: 'Algo deu errado', status: 500 };
  }
};

module.exports = {
  createUser,
};