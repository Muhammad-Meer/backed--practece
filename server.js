const app = require('./src/app')
const connectDB = require('./src/db')



connectDB()



app.listen(3200, () => {
  console.log("http://localhost:3200")
})

