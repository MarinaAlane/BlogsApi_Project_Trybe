const postService = require('../services/postService');

const addPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const result = postService.resultData(title, content, categoryIds);
  if (result.error) return res.status(result.error.code).json({ message: result.error.message });
  const category = await postService.createPost(title, content, categoryIds, id);
  if (category.error) {
    return res.status(category.error.code).json({ message: category.error.message });
  }

  return res.status(201).json(category);
};

const blogsPostList = async (_req, res) => {
  const result = await postService.allBlogsPost();
  if (result.error) return res.status(result.error.code).json({ message: result.error.message });

  return res.status(200).json(result);
};

const postForId = async (req, res) => {
  const { id } = req.params;

  const result = await postService.searchPostById(id);
  if (result.error) return res.status(result.error.code).json({ message: result.error.message });

  return res.status(200).json(result);
};

const updatePostForId = async (req, res) => {
  const { title, content } = req.body;
  const { id: paramId } = req.params;
  const { id: userId } = req.user;

  if (req.body.categoryIds) {
    return res.status(400).json({ message: 'Categories cannot be edited' });
  }

  const validData = postService.resultData(title, content, 'PUT');
  if (validData.error) {
    return res.status(validData.error.code).json({ message: validData.error.message });
  }

  const result = await postService.updatePostForId(paramId, userId, title, content);
  if (result.error) return res.status(result.error.code).json({ message: result.error.message });

  return res.status(200).json(result);
};

module.exports = {
  addPost,
  blogsPostList,
  postForId,
  updatePostForId,
};
