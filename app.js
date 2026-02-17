const model = require('./model')
const express= require('express');
const app = express();

app.use(express.json());


app.post('/post', async (req , res) => {
  try {
    const {title, description} = req.body;
    
    const notecreate = await no
    
  } catch (error) {
    
  }
});

module.exports = app;