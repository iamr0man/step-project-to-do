const { Note } = require('../models/note')
const express = require('express');

const router = express.Router();

//Return all notes in DB
router.get('/', async (req, res) => {
    const note = await Note.find().sort({
        name: 1
    });
    res.send(note);
});      

//Create one note
router.post('/', async (req, res) => {
    //Need to validation info
    // if (error) return res.status(400).send(error.details[0].message);
    const note = new Note({
        title: req.body.title,
        description: req.body.description
    });
    const result = await note.save();
    res.send(result);
});      

module.exports = router;