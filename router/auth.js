const express = require('express');
const router = express.Router();

require('../db/connection')
const Notes = require('../model/notesSchema')

router.get('/', (req, res) => {
    res.send(`Hello world from the server router js`);
});

// add notes
router.post('/addNotes', async (req, res) => {
    // more easy method to display content
    const {title, description} = req.body;

   // console.log(name)
    if(!description ){
        return res.status(422).json({error: "fill all the fields"});
    }

    try {
        const note = new Notes({title, description});
        await note.save();
        res.status(201).json({message: "Note saved"})
    } catch (error) {
        console.log(error);
    }
});

// view notes
router.get('/viewNotes', async(req, res) => {
    try {
        const notes= await Notes.find({}).sort({"date": 1})
        // req.notes = notes;
        // console.log(req.notes);

        res.status(200).send(notes);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;