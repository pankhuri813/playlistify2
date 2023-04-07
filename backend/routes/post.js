const express = require("express")

const router = express.Router()

router.post('/' , (req,res) =>{
    let data = req.body;
    res.send("data recieved")
    console.log(req.body)
});


module.exports = router