const express = require('express');
const app = express();


app.use(express.json())

let notes = []


app.get('/', (req, res) => {
  res.send("Hello World");
});


app.post('/notes', (req ,res) => {
  notes.push(req.body)
  res.status(201).json({
    mesaage: "note created successfully"
  })
  console.log(notes)
})


app.get('/notes', (req ,res) => {
  res.status(200).json({
    mesaage: "note fetch  successfully",
    notes: notes
  })
  console.log(notes)
})


app.delete('/notes/:index', (req , res) => {
   const id = req.params.index
   delete notes[id]

   res.status(200).json({
    delete: "delete ho choka ha"
   })
   
})

app.listen(3200, () => {
  console.log("http://localhost:3200");
  
});
