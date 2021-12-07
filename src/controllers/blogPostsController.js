// const { /* BlogPost *//* , Categories  */ } = require('../models');
const servicesBlogPost = require('../services/blogPostsServices');

const createBlogPost = async (req, res) => {
  try {
    console.log(req.body);
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

module.exports = { createBlogPost };