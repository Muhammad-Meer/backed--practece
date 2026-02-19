const mongoose = require('mongoose');


const usermodel = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
})

const user = mongoose.model('userdetails', usermodel)

module.exports = user;