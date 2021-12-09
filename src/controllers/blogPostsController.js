// const { /* BlogPost *//* , Categories  */ } = require('../models');
const servicesBlogPost = require('../services/blogPostsServices');

const createBlogPost = async (req, res) => {
  try {
    // console.log(req.body);
    const post = await servicesBlogPost.createBlogPost(req.body);
    const { id, userId, title, content } = post;
     res.status(201).json({ id, userId, title, content });
  } catch (error) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
    // const { authorization: token } = req.headers;
    
    // const validatingCategories = servicesBlogPost.validateCategories(categoryIds);
    // if (validatingCategories.message) { 
    //   return res.status(400).json(validatingCategories);
    // }
};

const getAllPosts = async (_req, res) => {
    const Posts = await servicesBlogPost.getAllPosts();
    return res.status(200).json(Posts);
};

const findPostId = async (req, res) => {
    const { id } = req.params;
    const post = await servicesBlogPost.findPostById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const updatedPost = await servicesBlogPost.updatePost(id, title, content);
  return res.status(200).json(updatedPost);
};

module.exports = { createBlogPost, getAllPosts, findPostId, updatePost };