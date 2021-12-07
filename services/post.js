const { BlogPost, User, Category } = require('../models');
const tokenExists = require('../utils/validationToken');
const validationPost = require('../utils/validationPost');
const utils = require('../utils/validationCategories');

const createPost = async (token, body) => {
  const { id } = tokenExists(token); 
  const result = await utils.validationPost(body, id);
  return result;
};

const getAll = async (token) => {
  tokenExists(token);
  const result = await 
  BlogPost.findAll({ include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories', through: { attributes: [] } }] });
  return result;
};

const getById = async (token, id) => {
  tokenExists(token);
  const result = await validationPost.getById(id);
  return result;
};

const updatePost = async (token, id, body) => {
 const payload = tokenExists(token);
 const idUser = payload.id;
  await validationPost.updatePost(idUser, id, body);
 const result = await BlogPost.findOne({ where: { id } });
 return result;
};

const deletePost = async (token, id) => {
  const payload = tokenExists(token);
  const idUser = payload.id;
  await validationPost.deletePost(idUser, id);
  await BlogPost.destroy({ where: { id } });  
};

module.exports = {
  createPost,
  getAll,
  getById,
  updatePost,
  deletePost,
};
