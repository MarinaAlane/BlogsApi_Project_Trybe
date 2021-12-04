const tokenExists = require('../utils/validationToken');
const utils = require('../utils/validationCategories');

const createPost = async (token, body) => {
  const { id } = tokenExists(token); 
  const result = await utils.validationPost(body, id);
  return result;
};

module.exports = {
  createPost,
};
