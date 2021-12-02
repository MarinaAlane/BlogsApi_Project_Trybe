const express = require('express');
const usersRoute = require('./routes/usersRoute');
const loginRoute = require('./routes/loginRoute');
const categoriesRoute = require('./routes/categoriesRoute');
const postRoute = require('./routes/postRoute');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', usersRoute);
app.use('/login', loginRoute);
app.use('/categories', categoriesRoute);
app.use('/post', postRoute);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
