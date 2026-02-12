const app = require('./app')
const conectDb = require('./db')

conectDb()

const port = 3200


app.get('/', (req , res) => {
  res.send('papa')
})


app.listen(port, () => {
  console.log("http://localhost:" + port)
})







