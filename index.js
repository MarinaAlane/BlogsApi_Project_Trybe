const express = require('express');
const bodyParser = require('body-parser');
const {
  nameValidation,
  emailValidation,
  passwordValidation,
} = require('./validations/middlewares');

const userController = require('./controllers/userController');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post(
  '/user',
  nameValidation,
  emailValidation,
  passwordValidation,
  userController.createUser,
);

app.post(
  '/login',
  emailValidation,
  passwordValidation,
  userController.login,
);

// app.get('/', async (req, res) => {
//   const users = await User.findAll();
//   res.status(200).json(users);
// });
