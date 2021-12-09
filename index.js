const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');

const loginController = require('./controllers/loginController');

const categoryController = require('./controllers/categoryController');

const blogPostController = require('./controllers/blogPostController');

const {
  isValidDisplayName,
  isValidEmail,
  isValidPassword,
  isValidName,
  isValidTitle,
  isValidContent,
  isValidCategoryIds } = require('./middlewares/validations');

const {
  isValidLoginEmail,
  isValidLoginPassword } = require('./middlewares/loginValidations');

const validateToken = require('./auth/validateToken');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send();
});

app.post('/user', isValidDisplayName, isValidEmail, isValidPassword, userController.createNewUser);

app.post('/login', isValidLoginEmail, isValidLoginPassword, loginController.login);

app.get('/user', validateToken, userController.getAllUser);

app.get('/user/:id', validateToken, userController.getUserById);

app.post('/categories', validateToken, isValidName, categoryController.createNewCategory);

app.get('/categories', validateToken, categoryController.getAllCategory);

app.post('/post',
  validateToken,
  isValidTitle,
  isValidContent,
  isValidCategoryIds,
  blogPostController.createNewPost);

app.get('/post', validateToken, blogPostController.getAllPosts);

app.get('/post/:id', validateToken, blogPostController.getPostById);

// app.put('/post/:id', validateToken, blogPostController.updatePostById);

// app.delete('/post/:id', blogPostController.deletePost);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));