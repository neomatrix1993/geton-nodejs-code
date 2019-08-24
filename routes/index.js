var express = require('express')
var router = express.Router()

import {Question} from '../models/question'

/* GET home page. */
router.get('/', function (req, res, next) {
    const question = new Question('abc', 'xyz')
    res.send(question.getQuestion());
});

module.exports = router
