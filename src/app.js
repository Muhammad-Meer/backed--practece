const express = require('express');
const authroutes = require('./routes/Auth.Routes');


const app = express();

app.use('/auth', authroutes);


module.exports = app;