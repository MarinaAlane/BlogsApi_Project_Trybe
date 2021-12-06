const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', require('./routes/index'));
app.use('/login', require('./routes/login'));
app.use('/categories', require('./routes/categories'));
app.use('/post', require('./routes/posts'));