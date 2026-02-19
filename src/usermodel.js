const mongoose = require('mongoose');


const userscheema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
})

const usermodell = mongoose.model('userdetails', userscheema)

module.exports = usermodell;