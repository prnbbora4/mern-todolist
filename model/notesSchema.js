const mongooose = require('mongoose');

const notesSchema = new mongooose.Schema({
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    }
})

const Notes = mongooose.model('Note', notesSchema);

module.exports = Notes;
