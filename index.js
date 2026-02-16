require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const port = 3200;

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log("Connected to database");

  app.listen(port, () => {
    console.log("Server running on http://localhost:" + port);
  });

})
.catch(err => console.log(err));
