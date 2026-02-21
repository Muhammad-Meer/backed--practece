const express = require('express');
const app = express();

const authroutes = require('./routes/Auth.Routes');


app.use(express.json());


app.use('/api/auth', authroutes);


module.exports = app;