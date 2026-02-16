const model = require('./model')
const express= require('express');
const app = express();

app.use(express.json());


app.get('/', (req , res) => {
  res.send('api is working')
})

module.exports = app;