const { BlogPost } = require('../models');

const somethingIsWrong = 'Something is wrong!';

const getAllPosts = async (_req, res) => {
  try {
    const allPosts = await BlogPost.findAll({
      include: [{ all: true }],
    });

    return res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json({ message: somethingIsWrong });
  }
};

module.exports = {
  getAllPosts,
};