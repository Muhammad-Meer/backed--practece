const { JsonWebTokenError } = require('jsonwebtoken');
const usermodel = require('../models/user.model');

const userregister = async (req, res) => {
  try {
     
       const { username, email, role = "user" } = req.body;

       const isuseralreadyexist = await usermodel.findOne({
        $or: [{username}, {email}]
       })
       

       if(isuseralreadyexist) {
        return res.status(400).json({ message: "user already exist"})
       }

       const newuser = await usermodel.create({
       username,
       email,
       role,
       });

       const createtoken = Jwt.sign({
        id: newuser._id,
        
       })


  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

