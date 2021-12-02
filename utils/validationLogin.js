const model = require('../models');


const validationLogin = (email, password) => {
  validationEmail(email),
  validationPassword(password),
  searchUSer(email),
  makeLogin(email, password),
};

// const searchUSer = async (email, password) => {
//  const search = await User.findOne({ where: { email }});
//  if (!search) throw err({ statusCode: 400, message: 'invalid fields' });
// };

const validationEmail = (email) => {
  if (!email) throw err({ statusCode: 400, message: '"email" is required' });
  if (email === '') throw err({ statusCode: 400, message: '"Email" is not allowed to be empty' });
};

const validationPassword = (password) => {
  if (!password) throw err({ statusCode: 400, message: '"password" is required' });
  if (password === '') throw err({ statusCode: 400, message: '"password" is not allowed to be empty' });
};

const makeLogin = (email, password) => {
  const search = await User.findOne({ where: { email, password }});
  if (!search) throw err({ statusCode: 400, message: 'invalid fields' });
};

module.exports = {
  validationLogin
};
