const Student = require('../models/student')

const createStudent = async (req,res) => {
    try {
        let student = new Student(req.body)
        student = await student.save()
        console.log(req.body , 'req.body');
        res.end('<h1> Data saved successfully ... </h1>')
    } catch (error) {
        console.log(error);
    }
}


const getStudents = async (req,res) => {
    try {
        let students = await Student.find({})
        console.log(students , 'students');
        res.end('<h1> Data fetched successfully ... </h1>')
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    createStudent,
    getStudents
} 