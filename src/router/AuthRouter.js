const express = require('express');
const router = express.Router();
const  registercontrooler = require('../Controller/AuthControoler')



router.post('/register', registercontrooler.register)



module.exports = router;