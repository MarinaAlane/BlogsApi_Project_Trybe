const express = require('express');
const rescue = require('express-rescue');
const postController = require('../controllers/postController');
const { validateUserWithToken } = require('../middlewares/validateJWT');

const router = express.Router();

router.get('/:id', validateUserWithToken, rescue(postController.postForId));
router.get('/', validateUserWithToken, rescue(postController.blogsPostList));
router.post('/', validateUserWithToken, rescue(postController.addPost));
router.put('/:id', validateUserWithToken, rescue(postController.updatePostForId));
router.delete('/me', rescue((req, res) => res.send('oi')));

module.exports = router;