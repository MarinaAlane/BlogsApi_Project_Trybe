const rescue = require('express-rescue');
const postsService = require('../services/postsService');

const create = rescue(async (request, response) => {
  const { title, content, categoryIds } = request.body;
  const { id } = request.user;
  const post = await postsService.create({ title, content, categoryIds, userId: id });
  response.status(201).send(post);
});

module.exports = { create };
