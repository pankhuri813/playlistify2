const express = require("express")
const mongoose = require("mongoose")
const router =require("./routes/post")
require( "dotenv").config();

const postRequest = require('./routes/post')

const app = express();

app.use(express.json())
// app.use((req,res,next) => {
//     console.log(req.path, req.method)
//     next()
// })
// app.use('/api/post', postRequest);


mongoose.connect(process.env.MONGO_URI)


app.post("/test", (req,res) =>{
    let data = req.body;
    console.log(req.body)
    res.send("data recieved")
    
})
app.put('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const url = req.body.url;
  
    // save the URL to the user data
    // your code here...
  
    res.status(200).send(`Successfully saved ${url} to user ${userId} data.`);
  });
  


app.get("/gtest", (req,res) => {
    console.log(req.query)
    res.send("oejchfye")
    
})

app.use(router);

app.listen(5000)

