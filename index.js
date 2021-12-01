const express = require('express');

const app = express();

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use(express.json());
app.use('/user', require('./router/user'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
