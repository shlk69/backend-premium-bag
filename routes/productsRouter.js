const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    res.send("It's product")
})

module.exports = router