const express = require('express')
const app = express()

const student = require('./routes/Student')

const path = require('path')

const connect = require('./connection')
app.use(student)
connect()

app.set('view engine' , 'ejs')
app.set('views' , path.resolve('./views'))

app.listen(3000 , (err) => {
    if(err) {
        console.log(err);
    }
    else{
        console.log('Server is running at port no. : 3000');
    }
})