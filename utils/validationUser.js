const model = require('../models/');

const cadastration = (email, displayName, password) => {
  validationEmail(email);
  searchifEmailExists(email);
  validationName(displayName);
  validationPassword(password);
};

const validationName = (displayName) => {
  if(typeof displayName !== string || displayName > 8)
  throw err({ statusCode: 400, message: 'displayName length must be at least 8 characters long'});
};

const validationPassword = (password) => {
  if(!password) throw err({
    statusCode: 400, message: '"password" is required' });

  if(typeof password !== string || password > 6 ) throw err({ statusCode: 400, message: '"password" length must be 6 characters long' });
};

const validationEmail = (email) => {
  if(!email) throw err({ statusCode: 400, message: '"email" is required' });

  const validEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g.test(email);
  if(!validEmail) throw err({
    statusCode: 400, message: '"email" must be a valid email'
  });
};

const searchifEmailExists = (email) => {
  model.

}

module.exports = {
  cadastration,
};
