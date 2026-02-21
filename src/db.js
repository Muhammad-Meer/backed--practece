const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((error) => {
      console.error("DB Connection Failed:", error.message);
      process.exit(1);
    });
}

module.exports = connectDB;