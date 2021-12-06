const express = require('express');
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv/config');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRoutes);
app.use('/login', loginRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

module.exports = app;
