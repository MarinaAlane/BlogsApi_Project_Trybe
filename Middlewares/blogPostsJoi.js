const Joi = require('joi');

const blogPostsJoi = Joi.object().keys({
  title: Joi.string().not().empty().required(),
  content: Joi.string().not().empty()
  .required(),
  categoryIds: Joi.array().items(Joi.number())
  .required(),
});

module.exports = { blogPostsJoi }; 