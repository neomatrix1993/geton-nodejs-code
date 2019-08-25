'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let timestampPlugin = require('../plugins/timestamp');
const typeEnums = require('../validator/formValidator').typeEnums;

const optionsSchema = {
    type: {
        type: String
    },
    value: {
        type: String
    }
};

const gridSchema = {
    rows: {
        type: [String]
    },
    columns: {
        type: [String]
    }
};

const questionSchema = new Schema({
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
});


const FormSchema = new Schema({
    name: {
        type: String,
        required: 'form name is required'
    },
    questions: [questionSchema]
});

FormSchema.plugin(timestampPlugin);

module.exports = {
    Model: mongoose.model('Form', FormSchema),
    Schema: FormSchema
};
