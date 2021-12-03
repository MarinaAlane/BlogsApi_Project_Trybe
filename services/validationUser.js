const validation = require('../utils/validationUser');
const generationToken = require('../utils/generationToken');
const { User } = require('../models');

const cadastration = async ({ email, displayName, password, image }) => {
  await validation.cadastration(email, displayName, password);
  const creation = await User.Create({ displayName, email, password, image });
  const token = generationToken(creation);
  return token;
};

module.exports = {
  cadastration,
};