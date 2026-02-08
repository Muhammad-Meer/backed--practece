const express = require('express');
const app = express();



app.use(express.json())



app.get('/', (req, res) => {
  res.send("Hello World");
});



let notes = []

app.post('/notes', (req ,res) => {
  notes.push(req.body)
  res.status(201).json({
    mesaage: "note created successfully"
  })
})


app.get('/notes', (req ,res) => {
  res.status(201).json({
    mesaage: "note created successfully"
  })
})


app.listen(3200, () => {
  console.log("http://localhost:3200");
  
});
