const { BlogPosts } = require('../models');

const create = async (title, content, userId) => {
  const result = await BlogPosts.create({ title, content, userId });

  console.log('teste agora 3', userId);
  
  return result;
};

const getAll = async () => BlogPosts.findAll({ include: [{ all: true }] });

const getId = async (id) => {
  const result = await BlogPosts.findOne({ where: { id }, include: [{ all: true }] });

  if (!result) return { message: 'Post does not exist' };
  return result;
};

module.exports = { create, getAll, getId };