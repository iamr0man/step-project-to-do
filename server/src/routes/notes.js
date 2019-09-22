const {
    Note,
    validate
} = require('../models/note')
const express = require('express');

const router = express.Router();

//Return create form note
router.get('/notes', async (req, res) => {
    res.render('notes', {});
});

//Detail view for note
router.get('/notes/:id', async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.render('detailNote', {
        title: note.title,
        description: note.description
    });
});

//Change data in note
router.put('/api/notes/:id', async (req, res) => {
    // const {
    //     error
    // } = validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
    
    const note = await Note.findByIdAndUpdate(req.params.id, {
        title: req.query.title,
        description: req.query.description
    })

    if (!note) return res.status(404).send('The note woth given ID was not found.')

    // res.render('/', {})
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
