const express = require("express")
const mongoose = require("mongoose")
const router =require("./routes/post")
const studentNote =require("./routes/notespost")
const cors = require('cors');

require( "dotenv").config();

// const postRequest = require('./routes/post')

const app = express();
app.use(cors());

app.use(express.json())



mongoose.connect(process.env.MONGO_URI)




app.use(router);
app.use(studentNote)

app.listen(5454)


