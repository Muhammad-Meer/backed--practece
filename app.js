const express = require('express');

const app = express()
app.use(express.json());




app.get('/', (req , res) => {
  res.send("Notes API Running...")
})


const port = 3200;

app.listen(port , () => {
  console.log("http://localhost:" + port)
})

module.exports = app;
