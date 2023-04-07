const express = require("express")
// const mongoose = require("mongoose")


const postRequest = require('./routes/post')

const app = express();

app.use(express.json())
// app.use((req,res,next) => {
//     console.log(req.path, req.method)
//     next()
// })
// app.use('/api/post', postRequest);


// mongoose.connect()


app.post("/test", (req,res) =>{
    let data = req.body;
    console.log(req.body)
    res.send("data recieved")
    
})


app.get("/gtest", (req,res) => {
    console.log(req.query)
    res.send("oejchfye")
    
})
app.listen(5000)


// schema={
//     email:{
//         type:String,
//         required:true
//     },
//     favourites:[{
//         category:String,
//         playlidtId:String
//     }]
// }