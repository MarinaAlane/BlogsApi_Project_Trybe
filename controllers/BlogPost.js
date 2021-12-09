const { BlogPost, PostCategory } = require('../models');
const BlogPostService = require('../services/BlogPost');

const parserResponse = (createdNewPost) => ({ 
  id: createdNewPost.id,
  title: createdNewPost.title,
  userId: createdNewPost.userId,
  content: createdNewPost.content,
});

const createBlogPost = async (req, res) => {
  try {
  const { title, content, categoryIds } = req.body;
  const userId = req.user;  
  const newPost = { title, content, categoryIds, userId, published: new Date() };  

  const blogPost = await BlogPostService.createBlogPost(newPost);
  if (blogPost.message) return res.status(400).json({ message: blogPost.message });
  
  const createdNewPost = await BlogPost.create(newPost);
  await PostCategory.bulkCreate(categoryIds.map((category) => 
  ({ postId: createdNewPost.id, categoryId: category })));
  
  return res.status(201).json(parserResponse(createdNewPost));
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'deu algum erro aqui' });
  }
};

module.exports = {
  createBlogPost,
};