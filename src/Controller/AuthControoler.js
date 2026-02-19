const usermodel = require('../usermodel')


async function register(req, res) {
  const { username, email, password} = req.body;
  const user = await  usermodel({

    username, email, password})

  
}

module.exports= {register}


