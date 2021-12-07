const express = require('express');

const User = require('./routes/User');
const { login } = require('./controllers/User');
const Categorie = require('./routes/Categories');
const Post = require('./routes/Post');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/login', login);

app.use('/user', User);
app.use('/categories', Categorie);
app.use('/post', Post);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
