const { BlogPost } = require('../models');
const BlogPostService = require('../services/BlogPost');

const createBlogPost = async (req, res) => {
  try {
  const { title, content, categoryIds } = req.body;
  const userId = req.user;  
  const newPost = { title, content, categoryId: categoryIds, userId, published: new Date() };  

  const blogPost = await BlogPostService.createBlogPost(newPost);
  if (blogPost.message) return res.status(400).json({ message: blogPost.message });
  
  const createdNewPost = await BlogPost.create(newPost);
  return res.status(201).json({ 
    id: createdNewPost.id,
    title: createdNewPost.title,
    userId: createdNewPost.userId,
    content: createdNewPost.content,
  });    
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'deu algum erro aqui' });
  }
};

module.exports = {
  createBlogPost,
};