const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const middlewareError = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.use(userRoutes);

app.use(middlewareError);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
