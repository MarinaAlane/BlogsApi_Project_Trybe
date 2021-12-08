const express = require('express');
const route = require('./routes');
const erro = require('./middleware/erros');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', route.user);
app.use('/login', route.login);
app.use('/post', route.post);
app.use('/categories', route.categories);

app.use(erro);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
