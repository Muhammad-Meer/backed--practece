const express = require('express');
const authcontroller = require('../Controllers/Auth.Controoler');

const router = express.Router();


router.post('/register', authcontroller.registeruser)

router.get('/test', (req , res) => {
  console.log('cookies', req.cookies);
  res.json({
    message: "test route",
    cookies: req.cookies
  })
})



module.exports = router;
