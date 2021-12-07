const express = require('express');

const bodyParser = require('body-parser');
const userController = require('./controller/userController');
const loginController = require('./controller/loginController');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
//

app.post('/user', userController.createUser);
app.post('/login', loginController.loginUser);

app.use(errorMiddleware);

app.listen(PORT, () => console.log('ouvindo porta 3000!'));
