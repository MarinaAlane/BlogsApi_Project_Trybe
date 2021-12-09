async function createPost(req, res) {
  try {
    return res.send('posts');
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = {
  createPost,
};