require('dotenv').config();

const express = require('express');
const categoriesRouter = require('./src/routers/categories');
const postRouter = require('./src/routers/post');
const userRouter = require('./src/routers/user');
const rootRouter = require('./src/routers/root');
const handleError = require('./src/middlewares/handleError');

const app = express();
app.use(express.json());

app.use('/categories', categoriesRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/', rootRouter);

app.use(handleError);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
