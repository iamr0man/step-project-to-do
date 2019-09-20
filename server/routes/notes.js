const {
    Note,
    validate
} = require('../models/note')
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
    //This data(req.body) need to receive from inputs or another tag
    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const note = new Note({
        title: req.body.title,
        description: req.body.description
    });
    const result = await note.save();
    res.send(result);
});

//Change data in note
router.put('/:id', async (req, res) => {
    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const note = await Note.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description
    }, {
        new: true
    })

    if (!note) return res.status(404).send('The note woth given ID was not found.')

    res.send(note);
})

//Delete note
router.delete('/:id', async (req, res) => {
    const note = await Note.findByIdAndRemove(req.params.id);

    if (!note) return res.send(404).send('The note with the given ID was not found.')

    res.send(note)

})

//Get note
router.get('/:id', async (req, res) => {
    const note = await Note.findById(req.params.id);

    if (!note) return res.send(404).send('The note with the given ID was not found.');

    res.send(note)
})

module.exports = router;