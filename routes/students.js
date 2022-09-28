const express = require('express')
const router = express.Router()
const studentsController = require('../controllers/studentsController')

router.route('/')
	.get(studentsController.getAllStudents);

router.route('/:MSSV/:id')
	.get(studentsController.getStudent)
	.post(studentsController.addStudent);

module.exports = router;