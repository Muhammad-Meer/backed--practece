const usermodel = require("../user.model");
const jwt = require("jsonwebtoken");


async function registeruser(req, res) {
  try {
    const { username, email, password } = req.body;

    const newuser = await usermodel.create({
      username,
      email,
      password,
    });

const token = jwt.sign(
   { id: newuser._id },
   process.env.jwt_secret, // 🔥 variable name match karo
   { expiresIn: '1d' }
);


     res.cookie("token", token)

    res.status(201).json({
      message: "user registered successfully",
      user: newuser,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getFunc(req , res) {
  console.log('cookies', req.cookies);
  res.json({
    message: "test route",
    cookies: req.cookies
})
}

module.exports = { registeruser, getFunc };