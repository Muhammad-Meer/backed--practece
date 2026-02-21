// server.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB URL
const MONGO_URL = "mongodb+srv://farhan:Farhan11@backend.ujf09hi.mongodb.net/hiringmine"

// User schema aur model
const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model("User", userSchema);

// MongoDB connect aur server start
mongoose.connect(MONGO_URL)
.then(() => {
  console.log("✅ Connected to MongoDB");

  // Server start
  app.listen(3200, () => {
    console.log("🚀 Server running at http://localhost:3200");
  });
})
.catch((error) => {
  console.error("❌ Error connecting to MongoDB:", error);
  process.exit(1);
});

// Simple test route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// POST API to save user in MongoDB
app.post("/add-user", async (req, res) => {
  try {
    const { name } = req.body; // Postman se "name" bhejna hai
    if (!name) return res.status(400).send("❌ Name is required");

    const newUser = new User({ name });
    await newUser.save();

    res.send(`✅ User "${name}" saved in MongoDB`);
  } catch (error) {
    res.status(500).send("❌ Error saving user: " + error);
  }
});