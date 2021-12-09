const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./router/user-router');
const loginRouter = require('./router/login-router');
const CategoryRouter = require('./router/category-router');
const blogPostRouter = require('./router/blog-post-router');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', CategoryRouter);
app.use('/post', blogPostRouter);
