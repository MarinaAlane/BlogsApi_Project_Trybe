const express = require('express');
const { users, login, categories, blogPosts } = require('./api/routes');

const app = express();

app.use(express.json());

app.use('/user', users);

app.use('/login', login);

app.use('/categories', categories);

app.use('/post', blogPosts);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
