const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),  
});

const validateBlogPost = (req, res, next) => {
  const { title, content, categoryIds } = req.body;    
  const { error } = schema.validate({ title, content, categoryIds });

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }  

  next();
};

module.exports = validateBlogPost;