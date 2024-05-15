const express = require('express');
const router = express.Router();
const MasterSchema = require('../models/masterModel');
const {getCourses, getCourse, createCourse, updateCourse, deleteCourse} = require("../controllers/courseController");


router.get('/', getCourses);

router.get('/:id', getCourse);

router.post('/', createCourse);

router.put('/:id', updateCourse)

router.delete('/:id', deleteCourse)

module.exports = router;