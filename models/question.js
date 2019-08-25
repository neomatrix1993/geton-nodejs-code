// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const typeEnums = require('../validator/formValidator').typeEnums;
//
// const optionsSchema = {
//     type: {
//         type: String
//     },
//     value: {
//         type: String
//     }
// };
//
// const gridSchema = {
//     rows: {
//         type: [String]
//     },
//     columns: {
//         type: [String]
//     }
// };
//
// const QuestionSchema = new Schema({
//     title: {
//         type: String,
//         required: 'Title is required'
//     },
//     type: {
//         type: String,
//         enum: Object.values(typeEnums),
//         required: 'type is required'
//     },
//     media: [optionsSchema],
//     options: [optionsSchema],
//     grid: gridSchema
// });
//
// module.exports = {
//     Model: mongoose.model('Question', QuestionSchema),
//     Schema: QuestionSchema
// };
