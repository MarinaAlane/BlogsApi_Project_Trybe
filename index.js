const express = require('express');

const app = express();

const routes = require('./routes/index');
const errors = require('./errors/errors');

app.use(express.json());
app.use('/user', routes.users);
app.use('/login', routes.login);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use(errors);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
