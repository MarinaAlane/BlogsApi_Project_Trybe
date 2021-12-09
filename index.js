const express = require('express');
const userroute = require('./src/routes/user');
const loginroute = require('./src/routes/login');
const categoriesroute = require('./src/routes/categories');
const blogPostroute = require('./src/routes/blogPosts');

const app = express();

app.use(express.json());

app.use('/user', userroute);

app.use('/login', loginroute);

app.use('/categories', categoriesroute);

app.use('/post', blogPostroute);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});