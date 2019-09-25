const {
    Note
} = require('../models/note');

const express = require('express');

const router = express.Router();

router.get('/lists', async (req, res) => {
    res.render('lists', {});
});

router.get('/lists/:id', async (req, res) => {
    const list = await Note.findById(req.params.id);
    res.render('detailList', {
        title: list.title,
        taskList: list.taskList
    });
});

router.post('/api/lists', async (req, res) => {
    const list = new Note({
        title: req.body.title,
        taskList: req.body.taskList
    });
    console.log(list);

    try {
        const result = await list.save();
        res.status(200).json(result);
    } catch (e) {
        res.send(e)
    }
});

router.put('/api/lists/:id?', async (req, res) => {
    const list = await Note.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        taskList: req.body.taskList
    });

    if (!list) return res.status(404).send('The list with given ID was not found.');

    res.status(200).json(list);
});

router.delete('/api/lists/:id', async (req, res) => {
    const list = await Note.findByIdAndRemove(req.params.id);

    if (!list) return res.status(404).send('The note with given ID was not found.');

    res.status(200).send(list);
});

module.exports = router;
