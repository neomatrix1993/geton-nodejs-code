const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

//form routes
router.get('/:id', formController.getForm);
router.get('/', formController.getForms);
router.post('/', formController.addForm);

module.exports = router;