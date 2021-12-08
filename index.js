const express = require('express');

const userCtrl = require('./controllers/userController');
const loginCtrl = require('./controllers/loginController');
const catCtrl = require('./controllers/categoryController');

const {
  alreadyExist,
  verifyEmail,
  verifyName,
  verifyPassword,
} = require('./validations/userValidation');
const {
  dontExist,
  verifyEmailLogin,
  verifyPasswordLogin,
} = require('./validations/loginValidation');
const { verifyToken } = require('./auth/validateToken');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/login', verifyEmailLogin, verifyPasswordLogin, dontExist, loginCtrl);
app.use('/user', verifyToken, verifyName, verifyEmail, verifyPassword, alreadyExist, userCtrl);
app.use('/categories', catCtrl);

app.listen(3000, () => console.log('ouvindo porta 3000!'));