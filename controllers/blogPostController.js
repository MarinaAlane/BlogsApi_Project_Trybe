const JWT = require('jsonwebtoken');
const { BlogPost, User, Category } = require('../models');

const USER_SECRET = 'secretLoginSecret';

// Solução userId construída com a ajuda dos alunos PH - Turma 10 - Tribo A,
// Johnny Rubi e da pessoa instrutora Isadora Koga.

const createNewPost = async (req, res) => {
  const token = req.headers.authorization;
  const { title, content, categoryIds } = req.body;

  const { dataValues } = JWT.verify(token, USER_SECRET);

  const userId = dataValues.id;

  const newPost = await BlogPost.create({ userId, title, content, categoryIds });

  return res.status(201).json(newPost);
};

const getAllPosts = async (req, res) => {
  const posts = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ] },
// Não retorna categories na response
    );

  /* if (!posts) {
      return res.status(404).json({ message: 'Post não encontrado' });
  } */

  return res.status(200).json(posts);
};

 const getPostById = async (req, res) => {
    const { id } = req.params;
    const post = await BlogPost.findOne({
      where: { id },
      include: [{ model: User, as: 'user' }, { model: Category, as: 'categories' }],
    });

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(post);
};

const updatePostById = async (req, res) => {
    const { id } = req.params;

    await BlogPost.update(
      { title: req.body.title, content: req.body.content },
      { where: { id } },
    );

    const updatedPost = await BlogPost.findOne(
      { where: { id }, include: [{ model: Category, as: 'categories' }], raw: true },
      );
      console.log(updatedPost);
    if (!updatedPost) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const { title, content, userId, categories } = updatedPost;

    return res.status(200).json({ title, content, userId, categories });
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  const deletedPost = await BlogPost.destroy(
    { where: { id } },
    );

  if (!deletedPost) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  return res.status(204);
};

module.exports = {
  createNewPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePost,
};
