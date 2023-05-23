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
  notes: {
    type: [{
      noteId: {
        type: String,
        required: true,
      },
      noteDate: {
        type: Date,
        required: true,
      },
      noteTime: {
        type: String,
        required: true,
      },
    }],
    default: [],
  },
});

module.exports = mongoose.model("user", favoriteSchema);
