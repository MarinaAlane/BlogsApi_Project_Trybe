const express = require('express');
const userRoutes = require('../routes/userRoutes');
const userMiddleware = require('../middlewares/userMeddlewares');

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(userMiddleware);

module.exports = app;
