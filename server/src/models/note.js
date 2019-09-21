const Joi = require('joi');
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
    }
});

const Note = mongoose.model(
    'Note',
    noteSchema
);

function validateNote(note) {
    const schema = {
        title: Joi.string()
            .min(1)
            .required(),
        description: Joi.string()
            .min(1)
            .required()
    };

    return Joi.validate(note, schema);
}

exports.Note = Note;
exports.validate = validateNote;