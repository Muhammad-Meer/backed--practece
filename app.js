const express = require("express");
const notemodel = require("./notemodel");

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const data = req.body;

    await notemodel.create({
      title: data.title,
      description: data.description
    });

    res.status(201).json({
      message: "note created successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong"
    });
  }
});



app.get('/', async (req, res) => {
  try {
   
  } catch (error) {
    
  }
})


module.exports = app;
