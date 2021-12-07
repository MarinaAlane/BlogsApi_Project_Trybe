const rescue = require('express-rescue');
const controller = require('../controllers/userController');
const userMiddlewares = require('../middlewares/userMiddlewares');

const router = (app) => {
  app.route('/user')
    .post(userMiddlewares.validateUser, rescue(controller.create));
};

module.exports = router;