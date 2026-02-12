const mongoose = require('mongoose')

// Step 1: Schema banana
const noteSchema = new mongoose.Schema({
  title: String,
  description: String
})

// Step 2: Model banana
const NoteModel = mongoose.model('Note', noteSchema)

module.exports = NoteModel

