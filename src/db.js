// // db.js
// const mongoose = require("mongoose");

// const connectDb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("✅ Connected to MongoDB");
//   } catch (error) {
//     console.error("❌ Error connecting to MongoDB:", error);
//     throw error; // agar DB fail ho to server start nahi hoga
//   }
// };

// module.exports = connectDb;