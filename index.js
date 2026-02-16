require("dotenv").config();

const mongoose = require('mongoose');
const app = require('./app');

const port = 3200;

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('connected to database');
})
.catch((err) => {
  console.log(err)
})

app.listen(port, () => {
   console.log("http://localhost:" + port);
})