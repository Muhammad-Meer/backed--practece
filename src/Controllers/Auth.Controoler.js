const usermodell = require('../user.model')



async function registeruser(req, res) {
  const { username, email, password } = req.body;
  try {
    const user = await usermodell.create({
      username,
      email,
      password
    });
    res.status(201).json({
      message: "User created successfully",
      user
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating user",
      error: error.message
    });
  }
}