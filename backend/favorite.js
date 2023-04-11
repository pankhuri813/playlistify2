const mongoose = require("mongoose");
const [type] = require("os")
const Schema = mongoose.Schema


const favoriteSchema = new Schema({

    userId: {
        
        type: String,
        required: true
    }, 

     name:{

         type: String

     },

     favorite:{

        type:Array,
        default:[]
  } 
});

module.exports = mongoose.model('user', favoriteSchema)