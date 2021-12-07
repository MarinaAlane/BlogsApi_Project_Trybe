const express = require('express');
const UserRouter = require('./routes/user');
const Login = require('./routes/login');
const CategoriesRouter = require('./routes/categories');

const app = express();
app.use(express.json());

app.use('/categories', CategoriesRouter);
app.use('/login', Login);
app.use('/user', UserRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
