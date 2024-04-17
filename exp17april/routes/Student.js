const express = require('express')
const router = express.Router()
const StudentController = require('../controllers/studentController')

router.use(express.urlencoded({ extended : false}))

router.get('/signin' , (req,res)=> {
    res.render('StudentCreate')
})

router.get('/students' , (req,res)=> {
    res.render('StudentCreate')
})

router.post('/student/create' , (req,res)=> {
    StudentController.getStudents(req,res)
})

module.exports = router