const mongose = require('mongoose')

const notesscheema = new  mongose.Schema({
  title: String,
  description: String,
})

const notemodel = mongose.model('note',notesscheema)

module.exports = notemodel