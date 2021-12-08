require('dotenv').config();
const { BlogPosts } = require('../models');

const createBlogPosts = (req, res) => {
  const { title, content, categoryIds } = req.body;
  return BlogPosts.create({ title, content, categoryIds })
    .then((data) => res.status(201).json(data.dataValues));
};

module.exports = {
  createBlogPosts,
};