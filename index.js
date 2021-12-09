const express = require('express');
const bodyParser = require('body-parser');

const Users = require('./controllers/UserController');
const Categories = require('./controllers/CategoryController');
const BlogPosts = require('./controllers/BlogPostController');
const Validations = require('./middlewares/Validations');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', [
  Validations.validateName,
  Validations.validateEmail,
  Validations.validatePassword,
  Users.createUser,
]);

app.post('/login', [
  Validations.validateEmail,
  Validations.validatePassword,
  Users.userLogin,
]);

app.get('/user', [
  Validations.checkToken,
  Users.getUsers,
]);

app.get('/user/:id', Validations.checkToken, Users.getUserById);

app.post('/categories', Validations.checkToken, Categories.createCategory);

app.get('/categories', Validations.checkToken, Categories.getCategories);

app.post('/post', [
  Validations.validatePostTitle,
  Validations.validatePostCategoryIds,
  Validations.checkToken,
  BlogPosts.createPost,
]);

app.get('/post', Validations.checkToken, BlogPosts.getPosts);

app.get('/post/:id', Validations.checkToken, BlogPosts.getPostById);

app.put('/post/:id', [
  Validations.checkToken,
  Validations.validatePostTitle,
  BlogPosts.updatePost,
]);

app.delete('/post/:id', Validations.checkToken, BlogPosts.deletePost);
