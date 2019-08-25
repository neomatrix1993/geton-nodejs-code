var express = require('express');

/**
 * Index page
 * @param req
 * @param res
 */
exports.getIndex = function (req, res) {
    res.render('index', {title: 'Hello world'});
};