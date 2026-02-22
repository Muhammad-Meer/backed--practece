const express = require("express");
const router = express.Router();



router.post("/create", (req, res) => {

     const token = req.cookies.token;

     if(!token) {
      res.status(401).json({
        meassage: "unauthorized"
      })
     }
        try {
          const decoded = jwt.verify(token, process.env.jwt_secret);
        } catch (error) {
          res.status(401).json({
            meassage: "invalid token"
          })
        }
        
});

module.exports = router;
