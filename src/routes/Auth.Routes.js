const express = require('express');
const authcontroller = require('../Controllers/Auth.Controoler');

const router = express.Router();


router.post('/register', authcontroller.registeruser)

router.get('/test', authcontroller.getFunc)



module.exports = router;
