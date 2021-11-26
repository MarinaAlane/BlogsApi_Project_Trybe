const express = require('express');
const routerUsers = require('./routes/routeUsers');
const routerLogin = require('./routes/routerLogin');

const app = express();
app.use(express.json());

app.use('/user', routerUsers);

app.use('/login', routerLogin);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
