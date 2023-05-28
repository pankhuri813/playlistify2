const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  userId: {
    type: String,
    required: true,
    index: true,
  },
  name: {
    type: String,
  },
  favorite: {
    type: Array,
    default: [],
  },
  notes:  
    [
      {
        noteId: {
          type: String,
          required: true,
        },
        noteTime:{
          type: String,
          required: true,
        },
        color: {
          type: String,
          required: true,
        },
        text : {
          type: String,
          required: true,
        },
        
      }
    ]
  
  
});

module.exports = mongoose.model("user", favoriteSchema);
