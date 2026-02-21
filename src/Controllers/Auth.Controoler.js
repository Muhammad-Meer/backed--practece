const usermodel = require('../user.model');


async function registeruser(req , res ) {
  try {
    const {username , email , password} = req.body;
    const user = await usermodel.create({username, email, password});
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = {registeruser}