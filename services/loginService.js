const { validateEmail, validatePassWord } = require('../middlewares/validateLogin');
const { User } = require('../models');

const validaData = (email, password) => {
  const eM = validateEmail(email);
  const pW = validatePassWord(password);

  return [eM, pW];
};

const searchForError = (email, password) => {
  const result = validaData(email, password);
  const find = result.filter((item) => item.error);
  return find;
};

const validateData = async (email, password) => {
  const result = searchForError(email, password);
  if (result.length > 0) return result[0];

  return false;
};

const findUser = async (email) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return {
      error: {
        code: 400,
        message: 'Invalid fields',
      },
    };
  }
  const { password: _, ...newUser } = user.dataValues;
  return newUser;
};

module.exports = {
  validateData,
  findUser,
};
