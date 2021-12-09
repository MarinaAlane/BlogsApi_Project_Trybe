const controller = require('../controller/userController');

const route2User = (app) => {
    app.route('/user')
        .post(controller.newUser);
};

module.exports = route2User;