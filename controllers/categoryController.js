const router = require('express').Router();
const { Category } = require('../models/category');

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const cat = await Category.create({ name });
    res.status(201).json(cat);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Erro no servidor' });
  }
});

router.get('/', async (req, res) => {
  try {
    const user = await Category.findAll();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor pelo post (controller)' });
  }
});

module.exports = router;
