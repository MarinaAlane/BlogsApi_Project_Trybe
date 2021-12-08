const bodyParser = require('body-parser');
const express = require('express');
const userRoutes = require('./routes/userRouters');
const categorieRoutes = require('./routes/categorieRouters');
const postRoutes = require('./routes/postRouters');

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use(userRoutes);
app.use(categorieRoutes);
app.use(postRoutes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;