const { BlogPosts, Users, Categories } = require('../models');

const create = async ({ title, content, userId }) => 
  BlogPosts.create({ title, content, userId });

const getAllPost = async () => BlogPosts.findAll({
  include: [
    { model: Users, as: 'user', attributes: { exclude: ['password'] } },
    { model: Categories, as: 'categories', through: { attributes: [] } },
  ],
});  

module.exports = {
  create,
  getAllPost,
};