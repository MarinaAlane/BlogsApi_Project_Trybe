require('dotenv').config();
const express = require('express');
const userRoute = require('./src/routes/userRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/user', userRoute);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;
