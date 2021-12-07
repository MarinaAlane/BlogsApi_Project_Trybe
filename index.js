const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());

// nÃ£o remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', router.user);
app.use('/login', router.login);
app.use(middlewares.error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));