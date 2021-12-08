const express = require('express');
const usersRoutes = require('./src/routes/usersRoutes');
const loginRoutes = require('./src/routes/loginRoutes');
const categRoutes = require('./src/routes/categoriesRoutes');

require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', usersRoutes);
app.use('/login', loginRoutes);
app.use('/categories', categRoutes);
