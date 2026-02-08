const express = require()

const app = express()


app.post('/notes', (req ,res) => {
  console.log(req.body)
})

module.export = app