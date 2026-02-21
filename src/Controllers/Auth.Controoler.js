const usermodel = require('../user.model');
const jwt = require('jsonwebtoken');


async function registeruser(req , res) {
     try {
          const {username , email , password} = req.body;
          const newuser = new usermodel.create({
                username,
                email,
                password,
          })

          
          const token = jwt.sign({
               id: newuser._id
          }, process.env.JWT_SECRET_KEY)

          res.status(201).json({
               message: "user registered successfully",
               user: newuser,
               token: token
          })

     } catch (error) {
          res.status(500).json({message: error.message});
     }
}


module.exports = {registeruser}