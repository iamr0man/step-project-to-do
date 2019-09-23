const {
    Note
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

    if (!note) res.status(404).send('The note woth given ID was not found')

    res.render('detailNote', {
        title: note.title,
        description: note.description
    });
});

router.post('/notes', async (req, res) => {
    const note = new Note({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const result = await note.save();
        res.status(200).send(result);
    } catch (e) {
        res.send(e)
    }
})

//Change data in note
router.put('/api/notes/:id?', async (req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description
    })

    if (!note) return res.status(404).send('The note woth given ID was not found.')

    res.redirect('/')
})

router.delete('/api/notes/:id', async (req, res) => {
    const note = await Note.findByIdAndRemove(req.params.id);

    if (!note) return res.status(404).send('The note woth given ID was not found.')

    res.redirect('/')
})


module.exports = router;