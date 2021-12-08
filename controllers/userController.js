const express = require('express');
const {
  createNewUser,
  getById,
  getAllUser,
} = require('../services/userService');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const tkn = req.headers.authorization;
    const { displayName, email, password, image } = req.body;
    await createNewUser({ displayName, email, password, image });
    res.status(201).json({ token: tkn });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor pelo post (userController)' });
  }
});

router.get('/', async (req, res) => {
  try {
    const user = await getAllUser();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor pelo post (controller)' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getById({ id });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor pelo post (controller)' });
  }
});

module.exports = router;