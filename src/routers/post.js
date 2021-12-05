const express = require('express');

const router = express.Router();
const Controller = require('../controllers/Post');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateToken, (req, res, next) => {
  Controller.create({ ...req.body, userId: res.locals.userId })
    .then((createdPost) => {
      res.status(201).json(createdPost);
    })
    .catch(next);
});

router.get('/', validateToken, (req, res, next) => {
  res.status(200).end();
});

module.exports = router;
