const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1
    },
    description: {
        type: String,
        required: true,
        minlength:1
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
