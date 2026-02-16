const express = require('express');

const app = express();

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Notes API Running...");
});

module.exports = app;
