const express = require('express');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

// GET route to get all of the terms
app.get('/api/terms', (req, res) => res.json(termData));


// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
