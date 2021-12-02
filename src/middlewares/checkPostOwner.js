const postService = require('../services/postService');

module.exports = async (req, res, next) => {
  const { userId } = req;
  const { id } = req.params;

  const post = await postService.findPost(id);

  const ownerId = post.dataValues.userId;

  if (ownerId !== userId) return next({ code: 'unauthorized', message: 'Unauthorized user' });

  next();
};
