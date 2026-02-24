const mongoose = require('mongoose');

const musicschema = new mongoose.Schema({
  uri: {
    type: String,
    required: true,

  },
  title: {
    type: String,
    equired: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user" ,
    required: true
  }
})

const musicmodel = mongoose.model("music",musicschema)
