const usermodel = require('../usermodel');
const jwt = require('jsonwebtoken');


async function register(req, res) {
  const { username, email, password} = req.body;
  const user = await  usermodel({

    username, email, password})
   
    const token = jwt.sign({
       id: user._id
      }, process.env.jwt_secret)
       res.status(200).json({
        message: "USER CREATE SUCCESSFULLY",
        user,
        token
       })
  
}

module.exports= {register}






