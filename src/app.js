const express = require('express');
const app = express();
const cookies = require('cookie-parser');

const authroutes = require('./routes/Auth.Routes');

// 👇 Yeh dono middleware lagao
app.use(express.json()); // JSON data ke liye
app.use(express.urlencoded({ extended: true })); // Form data ke liye
app.use(cookies());
app.use('/api/auth', authroutes);

module.exports = app;