// general imports
require('dotenv').config();
const express = require('express');

// routes imports
const Users = require('./routes/user');
const Login = require('./routes/login');
const Categories = require('./routes/categories');
const Post = require('./routes/post');
const ErrorMW = require('./middlewares/genericError');

// express use
const app = express();

// PORT
const PORT = process.env.PORT || 3000;
app.use(express.json());

// routes use
app.use('/user', Users);
app.use('/login', Login);
app.use('/categories', Categories);
app.use('/post', Post);

// middlewares
app.use(ErrorMW);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// PORT in use
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// exports
module.exports = app;
