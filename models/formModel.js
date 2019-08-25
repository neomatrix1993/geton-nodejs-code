'use strict';
const mongoose = require('mongoose');
const formSchema = require('./formSchema');

const FormModel = mongoose.model('Form', formSchema);

module.exports = FormModel;
