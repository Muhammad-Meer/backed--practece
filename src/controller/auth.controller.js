const usermodel = require('../models/user.model');

 async function userregister(req, res)  {

  try {
      const {username, email, role = "user"} = req.body;
      const isuseralreadyexist = await usermodel.findOne({
        $or: [
          {username},
          {email}
        ]
      })

      if(isuseralreadyexist){
        return res.status(400).json({message: "User already exist"})
      }

      const user = await usermodel.create({
        username,
        email,
        role,
      })

      const token = jwt.sign({
      id: user._id,
      role: user.role
      }, process.env.jwt_secret);

      res.cookie("token", token)



  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server error"
    })
  }
}

module.exports = {userregister}