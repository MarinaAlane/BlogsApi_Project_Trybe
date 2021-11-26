const express = require('express');
const { userRouter, loginRouter, categoryRouter, blogPostRouter } = require('./routes');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);
app.use('/post', blogPostRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));