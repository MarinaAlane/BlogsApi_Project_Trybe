const { BlogPost, Category } = require('../models');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;

    const category = await Category.findOne({ where: { id: categoryIds[0] } });
    if (!category) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }

    const post = await BlogPost.create(
      { title, content, userId: id, categoryIds },
    );
    return res.status(201).json(post);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.findAll({
      include: { all: true },
    });

    return res.status(200).json(posts);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = { createPost, getAllPosts };