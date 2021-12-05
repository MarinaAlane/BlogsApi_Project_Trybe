const bodyParser = require('body-parser');
const express = require('express');
const userRoutes = require('./routes/userRouters');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(userRoutes);

module.exports = app;