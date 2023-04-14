const express = require("express")
const mongoose = require("mongoose")
const router =require("./routes/post")
require( "dotenv").config();

const postRequest = require('./routes/post')

const app = express();

app.use(express.json())



mongoose.connect(process.env.MONGO_URI)




app.use(router);

app.listen(5000)


