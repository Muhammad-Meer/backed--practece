const express = require("express");
const router = express.Router();



router.post("/create", (req, res) => {

     const token = req.cookies.token;

     if(!token) {
      res.status(401).json({
        meassage: "unauthorized"
      })
     }

  res.send("post created");
});

module.exports = router;
