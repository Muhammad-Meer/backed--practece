const usermodel = require('../models/user.model');

 async function userregister(req, res)  {

  try {
      const {username, email, role = "user"} = req.body;
      const isuseralreadyexist = await usermodel.findOne({
        or: [
          {username},
          {email}
        ]
      })

      if(isuseralreadyexist){
        return res.status(400).json({
          message: "User already exist"
        })
      }

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server error"
    })
  }
}

module.exports = {userregister}