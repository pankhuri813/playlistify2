const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    notes: [{
        noteId: {
            type: String,
            required: true,
        },
        noteTime: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        updatedText: {
            type: String
        }
    }]
});

module.exports = mongoose.model("Note", notesSchema);
