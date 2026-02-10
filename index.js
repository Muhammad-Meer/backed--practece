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




// mongodb+srv://muhabbatali:zVqoJkgRl0U2kE9V@cluster0.fepov4t.mongodb.net/

