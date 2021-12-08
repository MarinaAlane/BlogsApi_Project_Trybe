const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
// const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());

// nÃo remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', routes.userRoutes);
app.use('/login', routes.loginRoutes);
app.use('/categories', routes.CategoriesRoutes);

app.listen(3000, () => console.log('ouvindo porta 3000!'));