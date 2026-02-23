const jwt = require("jsonwebtoken");
const usermodel = require("../models/user.model");

const userregister = async (req, res) => {
  try {
    const { username, email, role = "user" } = req.body;

    const isuseralreadyexist = await usermodel.findOne({
      $or: [{ username }, { email }],
    });

    if (isuseralreadyexist) {
      return res.status(400).json({ message: "user already exist" });
    }

    const newuser = await usermodel.create({
      username,
      email,
      role,
    });

    const createtoken = jwt.sign(
      {
        id: newuser._id,
        role: newuser.role,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", createtoken);

    return res.status(201).json({
      message: "User registered successfully",
      user: newuser,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const loginFunction = async (req, res) => {
     
     try {

      const { username, email} = req.body;

      const user = await usermodel.findOne({
        $or: [
          { username },
          { email }
        ]})

        if(!user) {
          return res.status(400).json({ message: "user not found" });
        }

     } catch (error) {
      res.status(500).json({ message: error.message });
      
     }
      



}

module.exports = { userregister, loginFunction };