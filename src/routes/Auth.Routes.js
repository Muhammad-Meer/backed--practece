const express = require('express');
const authcontroller = require('../Controllers/Auth.Controoler');

const router = express.Router();


router.post('/register', authcontroller.registeruser)




module.exports = router;
