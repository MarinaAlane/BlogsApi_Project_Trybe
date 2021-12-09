const { Op } = require('sequelize');
const { BlogPost, Category, User } = require('../models');
const validate = require('../validations/postValidations');
const validateCategories = require('../validations/categoryValidations');

const categoryOptions = { 
  model: Category,
  as: 'categories', 
  through: { attributes: { exclude: ['PostsCategory', 'postId', 'categoryId'] } },
};

const getAllCategoriesById = async (categories) => {
  const promiseCategories = categories.map((id) => Category.findByPk(id));
  return Promise.all(promiseCategories);
};

const validateCategory = async (categories) => {
  const resolvedCategories = await getAllCategoriesById(categories);
  resolvedCategories.forEach((category) => {
    validateCategories.categoryExists(category);
  });
};

const createPost = async (payload) => {
  await validateCategory(payload.categoryIds);
  return BlogPost.create(payload);
};

const getPosts = () => BlogPost.findAll({
  include: [{ model: User, as: 'user' }, 
  { ...categoryOptions }],
});

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [{ model: User, as: 'user' }, 
    { ...categoryOptions }],
  });
  validate.post(post);
  return post;
};

const editPost = async ({ title, content }, id, token) => {
  const post = await BlogPost.findByPk(id);
  validate.userIsOwner(post, token.id);
  await BlogPost.update({ title, content }, { where: { id } });
  return BlogPost.findByPk(id, { include: { ...categoryOptions } });
};

const deletePost = async (postId, token) => {
  const post = await BlogPost.findByPk(postId);
  validate.userIsOwner(post, token.id);
  await BlogPost.destroy({ where: { id: postId } });
};

const queryPost = async (param) => BlogPost.findAll({
  where: {
    [Op.or]: [{ title: { [Op.substring]: param } },
      { content: { [Op.substring]: param } }] },
    include: [{ model: User, as: 'user' }, { ...categoryOptions }],
});

module.exports = {
  createPost,
  getPosts,
  getPostById,
  editPost,
  deletePost,
  queryPost,
};
