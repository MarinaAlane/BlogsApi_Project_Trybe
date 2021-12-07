const { response } = require('express');
const services = require('../services/posts');

const createNewPost = async (req, res) => {
  const { title, content } = req.body;
  const { userId } = req;

  const { dataValues } = await services.createNewPost({ title, content, userId });

  delete dataValues.updated;
  delete dataValues.published;

  return res.status(201).json(dataValues);
};

const getAllPosts = async (_req, res) => {
  const allPosts = await services.getAllPosts();

  return res.status(200).json(allPosts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const postById = await services.getPostById(id);
  
  if (!postById) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(postById);
};

const updatePostById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { userId } = req;
  const updatedPost = await services.updatePostById({ id, title, content, userId });

  if (!updatedPost) return res.status(401).json({ message: 'Unauthorized user' });

  return res.status(200).json(updatedPost);
};

module.exports = {
  createNewPost,
  getAllPosts,
  getPostById,
  updatePostById,
};
