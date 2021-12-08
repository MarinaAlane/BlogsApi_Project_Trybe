// general imports
require('dotenv').config();
const express = require('express');

// express use
const app = express();
app.use(express.json());

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;
