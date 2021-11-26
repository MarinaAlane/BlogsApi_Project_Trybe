const express = require('express');

const userRoute = require('./routes/userRoute');
const error = require('./middlewares/error');

const app = express();

app.use(express.json());

// não remova esse endpoint para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRoute);

app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));