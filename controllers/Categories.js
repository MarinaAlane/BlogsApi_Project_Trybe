const Categories = require('../services/Categories');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { user, status, message } = await Categories.createCategory({ name });

  if (message) {
    return res.status(status).json({ message });
  }

  res.status(status).json(user);
};

module.exports = {
  createCategory,
};
