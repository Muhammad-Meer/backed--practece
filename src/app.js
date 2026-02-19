const express = require('express') 
const user = require('./usermodel')

const app = express()
app.use(express.json())

module.exports = app