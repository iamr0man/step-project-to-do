const Joi = require('joi');
const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
    },
    taskList: [{ task: {
        type: String,
        required: true,
    }, isDone: {
        type: Boolean,
        default: false,
    } }]
});

const List = mongoose.model(
    'List',
    listSchema
);

function validateList(list) {
    const schema = {
        title: Joi.string(),
        taskList: Joi.array()
            .items({task: Joi.string().required(), isDone: Joi.boolean()})
    };

    return Joi.validate(list, schema);
}

exports.List = List;
exports.validate = validateList;