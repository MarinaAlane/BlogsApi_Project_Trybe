const express = require('express');
require('dotenv').config();

const app = express();
const user = require('./routers/userRouter');
const login = require('./routers/loginRouter');

app.use(express.json());
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', user);
app.use('/login', login);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));