require('dotenv').config();
const express = require('express');

// routes import
const UserRoutes = require('./src/routes/userRoutes');
const LoginRoutes = require('./src/routes/loginRoutes');
const ErrorMiddleware = require('./src/middlewares/genericError');

const app = express();

// PORT
const PORT = process.env.PORT || 3000;
app.use(express.json());

// routes use
app.use('/user', UserRoutes);
app.use('/login', LoginRoutes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// middlewares
app.use(ErrorMiddleware);

app.listen(PORT, () => console.log(`Listening on the PORT: ${PORT}`));

module.exports = app;
