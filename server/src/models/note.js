const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    taskList: [{
        task: {
            type: String
        },
        isDone: {
            type: Boolean,
            default: false
        }
    }]
});

const Note = mongoose.model(
    'Note',
    noteSchema
);

exports.Note = Note;
