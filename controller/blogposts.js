// const jwt = require('jsonwebtoken'); 
require('dotenv').config();
const { BlogPosts } = require('../models');

const createBlogPosts = (req, res) => {
  const { title, categoryIds, content } = req.body;
  return BlogPosts.create({ title, content }, categoryIds)
    .then((result) => res.status(201).json(result.dataValues))
    .catch(() => res.status(500).json({ erro: '500' }));
};

module.exports = {
  createBlogPosts,
};