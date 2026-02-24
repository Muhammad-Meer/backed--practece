const express = require('express');
const cookies = require('cookie-parser');
const authroure = require('./routes/auth.route');
const musicrouter = require('./routes/music.routes')



const app = express();
app.use(express.json());
app.use(cookies());


app.post('/api/auth', authroure)


module.exports = app;