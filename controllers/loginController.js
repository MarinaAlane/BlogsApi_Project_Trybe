const jwt = require('jsonwebtoken');
const router = require('express').Router();
// const { Login } = require('../models/login');

const secret = 'jOrgetrybe21--';

const config = {
  expireIn: '15m',
  algorothm: 'HS256',
};

router.post('/', async (req, res) => {
  try {
    const { password, ...userWithoutPassword } = await req.body;
    const login = jwt.sign(userWithoutPassword, secret, config);
    res.status(200).json({ token: login });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor pelo post (loginController)' });
  }
});

module.exports = router;
