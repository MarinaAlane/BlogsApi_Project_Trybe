const express = require('express');
// app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const userRouter = require('./routes/userRouter');

app.use('/user', userRouter);
