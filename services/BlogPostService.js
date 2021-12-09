const { Op } = require('sequelize');
const { BlogPosts, User, Categories } = require('../models');

const createPost = async (post, email) => {
  const { id } = await User.findOne({ where: { email } });
  const { title, content } = post;
  const newPost = await BlogPosts.create({
    title,
    content,
    userId: id,
    published: new Date(),
    updated: new Date(),
  });
  return { status: 201, data: newPost };
};

const getPosts = async () => {
  const data = await BlogPosts.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 200, data };
};

const getPostById = async (id) => {
  const myPost = await BlogPosts.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!myPost) return { status: 404, message: 'Post does not exist' };

  return { status: 200, data: myPost };
};

const updatePost = async (data, id, email) => {
  const { userId, published } = await BlogPosts.findByPk(id);
  const myUser = await User.findOne({ where: { email } });

  if (myUser.id !== userId) return { status: 401, message: 'Unauthorized user' };
  const { title, content, categoryIds } = data;

  if (categoryIds) return { status: 400, message: 'Categories cannot be edited' };

  await BlogPosts.update(
    { title, content, userId, published, updated: new Date() },
    { where: { id } },
  );

  const myPost = await BlogPosts.findByPk(id, {
    include: [
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: 200, myPost };
};

const deletePost = async (id, email) => {
  const postId = await BlogPosts.findByPk(id);

  if (!postId) return { status: 404, message: 'Post does not exist' };

  const user = await User.findOne({ where: { email } });

  if (user.id !== postId.userId) return { status: 401, message: 'Unauthorized user' };

  await BlogPosts.destroy({ where: { id } });

  return { status: 204 };
};

const findPostByQuery = async (q) => {
  const outPut = await BlogPosts.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.substring]: q } },
        { content: { [Op.substring]: q } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 200, data: outPut };
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  findPostByQuery,
};
