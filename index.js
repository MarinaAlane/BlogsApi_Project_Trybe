const express = require('express');
require('dotenv').config();

const app = express();
const user = require('./routers/userRouter');
const login = require('./routers/loginRouter');
const categories = require('./routers/categoriesRouter');

app.use(express.json());
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', user);
app.use('/login', login);
app.use('/categories', categories);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));