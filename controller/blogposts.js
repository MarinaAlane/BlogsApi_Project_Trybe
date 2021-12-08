require('dotenv').config();
const { BlogPosts } = require('../models');

const createBlogPosts = (req, res) => {
  const { title, content, categoryIds } = req.body;
  
  return BlogPosts.create({ title, content, categoryIds, userId: 1 })
    .then((data) => res.status(201).send(data.dataValues));
};

module.exports = {
  createBlogPosts,
};