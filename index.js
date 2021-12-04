const express = require('express');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/user', userRouter);

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
