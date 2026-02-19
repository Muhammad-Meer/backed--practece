const express = require('express') 
const AuthRouter = require('./router/AuthRouter')


const app = express()
app.use(express.json())
app.use('/api/auth', AuthRouter)

module.exports = app