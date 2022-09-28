const express = require('express')
const router = express.Router()
const studentsController = require('../controllers/studentsController')

router.route('/')
	.get(studentsController.getMessage);

router.route('/:id')
	.get(studentsController.getMessage);

module.exports = router;