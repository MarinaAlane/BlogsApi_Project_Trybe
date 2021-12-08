const { BlogPosts } = require('../models');

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

module.exports = {
  createPost,
};
