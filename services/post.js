const { BlogPost, User, Category } = require('../models');
const tokenExists = require('../utils/validationToken');
const utils = require('../utils/validationCategories');

const createPost = async (token, body) => {
  const { id } = tokenExists(token); 
  const result = await utils.validationPost(body, id);
  return result;
};

const getAll = async (token) => {
  tokenExists(token);
  const result = await BlogPost.findAll({ include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories', through: { attributes: [] } }] });
  return result;
};


module.exports = {
  createPost,
  getAll,
};
