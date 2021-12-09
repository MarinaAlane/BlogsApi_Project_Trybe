const express = require('express');
const bodyParser = require('body-parser');
const usersRoute = require('./routes/usersRoute');
const loginRoute = require('./routes/loginRoute');
const categoriesRoute = require('./routes/categories');
const postsRoute = require('./routes/postsRoute');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', usersRoute);
app.use('/login', loginRoute);
app.use('/categories', categoriesRoute);
app.use('/post', postsRoute);