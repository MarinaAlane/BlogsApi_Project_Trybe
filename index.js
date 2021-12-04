const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');
const categoryRouter = require('./routes/categoryRouter');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use(userRouter);
app.use(categoryRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
