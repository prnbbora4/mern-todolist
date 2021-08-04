const mongooose = require('mongoose');

const notesSchema = new mongooose.Schema({
    title: {
        type: String,
        default: "Anonymous"
    },
    description: {
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now,
    },
})

const Notes = mongooose.model('Note', notesSchema);

module.exports = Notes;
