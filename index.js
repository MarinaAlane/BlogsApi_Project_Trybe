const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./src/routes/usersRoutes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json);

app.listen(PORT, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', usersRoutes);
