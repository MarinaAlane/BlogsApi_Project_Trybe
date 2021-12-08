const { createUserServices } = require('../services/UserServices');

const createUserController = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const data = await createUserServices({ displayName, email, password, image });
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
    return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong. Try again later' });
  }
};

module.exports = { createUserController };