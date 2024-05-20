const express = require('express');
const app = express();
const routes = require('./routes');

// Utilisation des routes définies dans routes.js
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
