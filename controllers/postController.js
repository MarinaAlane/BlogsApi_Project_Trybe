const { BlogPosts, User } = require('../models');

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id: userId } = req.currentUser.userWithoutPassword.dataValues;
    const data = await BlogPosts.create({ title, content, userId });
    return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu um erro ao fazer o cadastro' });
  }
};

const getPosts = async (req, res) => {
  try {
    const data = await BlogPosts.findAll({
      include: [{ model: User, as: 'user' }],
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu um erro ao listar os posts' });
  }
};

module.exports = {
  createPost,
  getPosts,
};
