const { BlogPost } = require('../models');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    console.log(title, content, categoryIds);
    const post = await BlogPost.create({ title, content, categoryIds });
    return res.status(201).json(post);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = { createPost };