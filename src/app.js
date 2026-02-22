const express = require('express');
const app = express();

const authroutes = require('./routes/Auth.Routes');

// 👇 Yeh dono middleware lagao
app.use(express.json()); // JSON data ke liye
app.use(express.urlencoded({ extended: true })); // Form data ke liye

app.use('/api/auth', authroutes);

module.exports = app;