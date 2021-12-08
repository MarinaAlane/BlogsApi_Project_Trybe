const userService = require('../service/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const newUser = await userService.createUser(displayName, email, password, image);
    return res.status(201).json({ token: newUser });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
};
