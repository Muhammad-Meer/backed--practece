const express = require('express');
const router = express.Router();
const authcontroller = require('../controller/auth.controller')




router.post('/register', authcontroller.userregister)


module.exports = router;