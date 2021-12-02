const express = require('express');
const bodyParser = require('body-parser');
const userValidations = require('./validations/userValidate');
const userController = require('./controllers/userController');
const categoryValidations = require('./validations/categoryValidate');
const categoryController = require('./controllers/categoryController');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (req, res) => {
  res.send();
});

app.post(
  '/user',
  userValidations.validateEmail,
  userValidations.validateName,
  userValidations.validatePassword,
  userController.createUser,
);

app.post(
  '/login',
  userValidations.validateEmail,
  userValidations.validatePassword,
  userController.login,
);

app.get(
  '/user',
  userValidations.validateJWT,
  userController.getAll,
);

app.get(
  '/user/:id',
  userValidations.validateJWT,
  userController.getId,
);

app.post(
  '/categories',
  userValidations.validateJWT,
  categoryValidations.validateName,
  categoryController.createCategory,
);

app.get(
  '/categories',
  userValidations.validateJWT,
  categoryController.getAll,
);
