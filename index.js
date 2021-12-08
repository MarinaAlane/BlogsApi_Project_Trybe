const express = require('express');
const route = require('./routes');

const app = express();

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', route.user);
app.use('/login', route.login);
app.use('/post', route.post);
app.use('/categories', route.categories);
app.use('/user', route.createUser);

app.use((err, _req, res, _next) => {
  if (err.statusCode) {
    const { statusCode, message } = err;
    return res.status(statusCode).json({ message });
  }
  return res.status(500).json({ message: 'Erro interno' });
});
