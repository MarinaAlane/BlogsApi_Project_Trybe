const { User } = require('../models');
const generationToken = require('./generationToken');

const err = (statusCode) => ({ statusCode });

// const searchUSer = async (email, password) => {
//  const search = await User.findOne({ where: { email, password }});
//  if (!search) throw err({ statusCode: 400, message: 'invalid fields' });
// };

const validationEmail = (email) => {
  if (email === '') throw err({ statusCode: 400, message: '"email" is not allowed to be empty' });
  if (!email) throw err({ statusCode: 400, message: '"email" is required' });
};

const validationPassword = (password) => {
  if (password === '') { 
    throw err({ statusCode: 400, message: '"password" is not allowed to be empty' });
  }
  if (!password) throw err({ statusCode: 400, message: '"password" is required' });
};

const makeLogin = async (email, password) => {
  const search = await User.findOne({ where: { email, password } });
  if (!search) throw err({ statusCode: 400, message: 'Invalid fields' });
  const token = generationToken(search);
  return token;
};

const validationLogin = async (email, password) => {
  validationEmail(email);
  validationPassword(password);
  const result = await makeLogin(email, password);
  return result;
};

module.exports = {
  validationLogin,
};
