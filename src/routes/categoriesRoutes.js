const { Router } = require('express');

const categoriesRoutes = new Router();

categoriesRoutes.post('/', (req, res) => res.status(200).json({ message: 'rota categories' }));

module.exports = categoriesRoutes;