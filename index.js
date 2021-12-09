// general imports
require('dotenv').config();
const express = require('express');

// routes imports
const Users = require('./src/routes/userRoutes');
const Categories = require('./src/routes/categoryRoutes');
const Post = require('./src/routes/postRoutes');

// MW imports
const errorMW = require('./src/middlewares/error');

// express use
const app = express();
app.use(express.json());

// routes use
app.use(Users);
app.use(Categories);
app.use(Post);

// middlewares
app.use(errorMW);

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;
