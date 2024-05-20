const express = require('express');
const app = express();
const routes = require('./routes');

// Utilisation des routes définies dans routes.js
app.use('/api', routes);

module.exports = app;
