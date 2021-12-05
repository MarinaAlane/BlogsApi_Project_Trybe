const express = require('express');
const bodyParser = require('body-parser');

// const userController = require('./controllers/userController');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const userRouter = require('./routers/userRouter');
const loginRouter = require('./routers/loginRouter');

app.use('/user', userRouter);
app.use('/login', loginRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!')); 
