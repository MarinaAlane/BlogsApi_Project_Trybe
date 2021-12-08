const express = require('express');
const usersRoutes = require('./routes/usersRoutes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', usersRoutes);

app.listen(PORT, () => console.log(`Server conected on port ${PORT}!`));