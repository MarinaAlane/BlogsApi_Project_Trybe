const express = require('express');

const routerUser = require('./routes/userRoutes');

const routerCategorie = require('./routes/categorieRoutes');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use('/', routerUser);

app.use('/', routerCategorie);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
