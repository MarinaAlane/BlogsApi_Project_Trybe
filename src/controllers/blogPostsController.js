const { BlogPost, Category, User } = require('../models');

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
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

// source, vi no repositório do Tarcisio Meneses como usar o through: { attributes: [] }

const getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    if (!post) { return res.status(404).json({ message: 'Post does not exist' }); }

    return res.status(200).json(post);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const updatePostById = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    await BlogPost.update({ title, content }, { where: { id } });

    const post = await BlogPost.findOne({
      where: { id },
      attributes: { exclude: ['published', 'updated'] }, 
      include: [
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return res.status(200).json(post);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = { 
  createPost, 
  getAllPosts,
  getPostById,
  updatePostById,
 };