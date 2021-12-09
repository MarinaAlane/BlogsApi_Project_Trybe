const express = require('express');

const app = express();
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter'); 
const categoryRouter = require('./routes/categoryRouter');
const postRouter = require('./routes/postRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);
