const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const questionSchema = require('./questionSchema');
let timestampPlugin = require('../plugins/timestamp');

const formSchema = new Schema({
    name: {
        type: String,
        required: 'form name is required'
    },
    questions: [questionSchema]
});
formSchema.plugin(timestampPlugin);

module.exports = formSchema;