const postService = require('../services/postService');

const addPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  try {
    const result = postService.resultData(title, content, categoryIds);
    if (result.error) return res.status(result.error.code).json({ message: result.error.message });

    const category = await postService.createPost(title, content, categoryIds, id);
    if (category.error) {
      return res.status(category.error.code).json({ message: category.error.message });
    }

    return res.status(201).json(category);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

const blogsPostList = async (req, res) => {
  try {
    const result = await postService.allBlogsPost();

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  addPost,
  blogsPostList,
};
