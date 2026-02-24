const musicmodel = require("../models/music.model");
const jwt = require("jsonwebtoken");

const createmusic = (req, res) => {
  const token = req.cookies.token();

  if (!token) {
    res.status(401).json({ message: "mmm" });
  }

  try {
    const decoded = jwt.verify(token, process.env.jwt_secret);


        if(decoded.role !== "artist" ) {
        return res.status(403).json({})
        }





  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "mmm" })
  }
};
