const express = require('express');
const { Home } = require('./routes');

const app = express();
require('dotenv').config();

app.listen(() => console.info(`Ligado na porta ${process.env.PORT}`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', Home);
// app.use('/', Home);
// app.use('/products', Products);
// app.use('/sales', Sales);