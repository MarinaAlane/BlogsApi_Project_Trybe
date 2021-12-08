const express = require('express');
const user = require('./routes/user');
const login = require('./routes/login');
const categories = require('./routes/categories');
const post = require('./routes/post');

const app = express();

app.use(express.json());
app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use('/user', user);
app.use('/login', login);
app.use('/categories', categories);
app.use('/post', post);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
