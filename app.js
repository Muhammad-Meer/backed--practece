const express = require('express');
const app = express();



app.get('/', (req , res) => {
  res.send('module.exports = app;')


  const port = 3200

  
  app.listen(port , () => {
    console.log("http://localhost:" + port)

  })
})