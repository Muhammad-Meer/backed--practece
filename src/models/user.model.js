const mongoose = require('mongoose');


const userschema = new mongoose.Schema({
  username: {
   type: String,
   required: true,
   unique: true
  },
  email: {
   type: String,
   required: true,
   unique: true
  },
  role: {
    type: String,
    enum: ['user', 'artist'],
    default: 'user'
  }
})


const usermodel = mongoose.model('userdeta',userschema)

module.exports = usermodel;