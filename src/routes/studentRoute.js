const express = require('express');
const router = express.Router();
const MasterSchema = require('../models/masterModel');
const { getStudents, getStudent, createStudent, updateStudent, deleteStudent, getTotalStudents, getSearchStudent, getSearchLastStudent, getFilterStudent, getTotalStudents2 } = require("../controllers/studentController");

router.get('/count', getTotalStudents)

router.get('/search', getSearchStudent) //Ejemplo: http://localhost:3000/api/students/search?firstname=Oliver

router.get('/searchlast/:lastname', getSearchLastStudent)

router.get('/filter', getFilterStudent) //Ejmeplo http://localhost:3000/api/students/filter?AgeMinim=20

router.get('/counttwo', getTotalStudents2)

router.get('/', getStudents);

router.get('/:id', getStudent);

router.post('/', createStudent);

router.put('/:id', updateStudent)

router.delete('/:id', deleteStudent)



module.exports = router;