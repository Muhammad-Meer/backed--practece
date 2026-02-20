const express = require('express') 
const AuthRouter = require('./routes/AuthRoutes')


const app = express()
// app.use(express.json())
// app.use('/api/auth', AuthRouter)

module.exports = app
