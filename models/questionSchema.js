const typeEnums = require('../validator/formValidator').typeEnums;
const optionsSchema = require('./optionsSchema');
const gridSchema = require('./gridSchema');

const questionSchema = {
    title: {
        type: String,
        required: 'question title is required'
    },
    type: {
        type: String,
        enum: Object.values(typeEnums),
        required: 'question type is required'
    },
    media: [optionsSchema],
    options: [optionsSchema],
    grid: gridSchema
};

module.exports = questionSchema;