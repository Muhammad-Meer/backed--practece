const express = require('express');
const cookies = require('cookie-parser');
const authroure = require('./routes/auth.roure');



const app = express();
app.use(express.json());
app.use(cookies());


app.use('/api/auth', authroure)


module.exports = app;