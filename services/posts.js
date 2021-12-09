const { BlogPost } = require('../models');

const createPost = async (post) => {
    const { title, content, userId } = post;
    if (!title) { return { status: 400, message: '"title" is required' }; }
    if (!content) { return { status: 400, message: '"content" is required' }; }
    const addPost = await BlogPost.create({ title, content, userId });
    return { status: 201, addPost };
};

module.exports = { createPost };