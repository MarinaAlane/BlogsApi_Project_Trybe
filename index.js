const express = require('express');
require('dotenv').config();

// const { user } = require('./models');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`ouvindo porta ${PORT}!`));

app.use(express.json());
app.use('/user', require('./router/user'));
app.use('/login', require('./router/login'));
app.use('/categories', require('./router/categories'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
