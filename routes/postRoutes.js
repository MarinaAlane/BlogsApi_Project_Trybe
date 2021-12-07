const express = require('express');
const postController = require('../controllers/postController');
const { validateUserWithToken } = require('../middlewares/validateJWT');

const router = express.Router();

router.get('/', (req, res) => res.send('oi'));
router.get('/:id', (req, res) => res.send('oi'));
router.post('/', validateUserWithToken, postController.addPost);
router.put('/', (req, res) => res.send('oi'));
router.delete('/me', (req, res) => res.send('oi'));

module.exports = router;