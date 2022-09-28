const data = require('../models/students')


const getAllStudents = (req, res) => {
	res.json(data.mygroup)
	// console.log("ok");
}

const getStudent = (req, res) => {
	if(parseInt(req.params.MSSV) !== data.mygroup[0].id) {
		return res.status(400).json({"error": 'not valid'});
	}
	const student = data.mygroup.find(std => std.id === parseInt(req.params.id));
	if(!student) {
		return res.status(400).json({"error": 'not valid'});
	}
	res.json(student);
}

const addStudent = (req, res) => {
	const whiteList = [19110491, 19110042, 19110501];
	const alreadyExist = data.mygroup.find(std => std.id === parseInt(req.body.id));
	const validate = whiteList.find(id => parseInt(req.body.id) === id);
	if(alreadyExist || !validate) {
		res.status(400).json("Not valid");
	}
	const newStudent = {
		id: req.body.id,
		name: req.body.name
	}
	data.mygroup.push(newStudent);
	res.status(200).json(data);
}

const getMessage = (req, res) => {
	const id = req.params.id;
	const text = "";
	const students = [];

	if(id !== undefined) {
		let student = data.mygroup.find(std => std.id === parseInt(id));
		if(student !== undefined) {
			students.push(student);
			
		}
		res.render("message", {
			students: students,
		})
	}
	res.render("message", {
		students: data.mygroup
	})

	
}

module.exports = {
	getAllStudents,
	getStudent,
	addStudent,
	getMessage
}
