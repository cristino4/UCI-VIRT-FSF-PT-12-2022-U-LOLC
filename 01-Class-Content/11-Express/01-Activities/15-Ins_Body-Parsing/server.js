const express = require('express');

const PORT = 3001;
const reviews = require('./db/reviews');

const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET request for ALL reviews
app.get('/api/reviews', (req, res) => {
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);

  // Sending all reviews to the client
  return res.json(reviews);
});

// POST request to add a review


app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
