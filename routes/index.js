const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

//form routes
router.get('/', indexController.getIndex);

module.exports = router;