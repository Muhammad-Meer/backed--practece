const express = require('express');
const  registercontrooler = require('../Controller/AuthControoler')



const router = express.Router();


router.post('/register', registercontrooler.registeruser)



module.exports = router;