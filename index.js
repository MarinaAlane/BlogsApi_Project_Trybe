const express = require('express');
const userRouter = require('./routes/routesOfUsers');

const PORT = 3000;

const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`listening on the port  ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
