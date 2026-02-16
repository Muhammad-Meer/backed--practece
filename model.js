const mongoose = require('mongoose');


const dcheema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
        required: true
  }
},{timestamps: true});

const model = mongoose.model('deta', dcheema)


module.exports = dcheema
