const mongoose = require("mongoose");
const Schema = mongoose.Schema

const favoriteSchema = new Schema({

    userId: {
        type: String,
        required: true
    }, 
   favorite:[
        {
            category: String,
            playlist: String
        }
    ]
});

module.exports = mongoose.model('Favorite', favoriteSchema)