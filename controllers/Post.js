const { Op } = require('sequelize');

const { BlogPost, Categorie, PostsCategorie, User } = require('../models');
const { validatePost } = require('../middlewares/Validations');

const create = async (req, res) => {
  const error = validatePost(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { title, categoryIds, content } = req.body;

  const categories = await Categorie.findAll({ where: { id: { [Op.in]: categoryIds } },
    attributes: ['id'] });
  
  const categoriesList = categories.map((cat) => cat.dataValues.id);
  const includeAll = categoryIds.every((ele) => categoriesList.includes(ele));
  
  if (!includeAll) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  const userId = req.user.id;

  const { id } = await BlogPost.create({ title, userId, content });
  categoryIds.forEach(async (cat) => {
    await PostsCategorie.create({ postId: id, categoryId: cat });
  });

  res.status(201).json({ id, userId, title, content });
};

const getAll = async (_req, res) => {
  const posts = await BlogPost.findAll({
    include: [{ model: User, as: 'user' },
    { model: Categorie, as: 'categories' }],
  });
  res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await BlogPost.findOne({
    where: { id },
    include: [{ model: User, as: 'user' },
    { model: Categorie, as: 'categories' }],
  });

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  res.status(200).json(post);
};

module.exports = {
  create,
  getAll,
  getById,
};