const express = require('express');
const rescue = require('express-rescue');
const usersRoutes = require('./routes/usersRoutes');
const loginRoutes = require('./routes/loginRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const postRoutes = require('./routes/postRoutes');
const error = require('./middlewares/error');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', rescue(usersRoutes));
app.use('/login', rescue(loginRoutes));
app.use('/categories', rescue(categoriesRoutes));
app.use('/post', rescue(postRoutes));

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(error);
