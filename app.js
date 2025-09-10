// app.js
const express = require('express');
const app = express();
const loggingMiddleware = require('./loggingMiddleware');

app.use(express.json()); // So we can read req.body
app.use(loggingMiddleware); // Add our custom middleware here

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
