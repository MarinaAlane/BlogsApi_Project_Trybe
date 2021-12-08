const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();
app.use(bodyParser.json());

// nÃo remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/categories', routes.CategoriesRoutes);
app.use('/user', routes.userRoutes);
app.use('/login', routes.loginRoutes);
app.use('/post', routes.BlogPostsRoutes);

app.listen(3000, () => console.log('ouvindo porta 3000!'));