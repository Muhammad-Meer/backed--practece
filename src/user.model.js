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
})