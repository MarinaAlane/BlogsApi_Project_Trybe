const express = require('express');
const User = require('./src/routes/User');
const Login = require('./src/routes/Login');

const app = express();

app.use(express.json());
app.use(User, Login);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
