var express = require('express');
var router = express.Router();
var { Question } = require('../models/question');

/* GET home page. */
router.get('/', function (req, res, next) {
    const question = new Question('abc', 'xyz')
    res.send(question.getQuestion());
});

export default router;