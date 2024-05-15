const StudentSchema = require('../models/studentModel');

const getStudents = async(req, res) => {
    try{
        const student = await StudentSchema.find({}).populate({
            path: 'courses',
            populate: { path: 'masters' }
        });
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getStudent = async (req, res) => {
    try{
        const { id } = req.params;
        const student = await StudentSchema.findById(id).populate({
            path: 'courses',
            populate: { path: 'masters' }
        });
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getTotalStudents = async (req, res) => {
    try{
        const student = await StudentSchema.countDocuments({});
        res.status(200).json({ student })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getSearchStudent = async (req, res) => {
    try {
        const {  firstname } = req.query;
        let filter = {};
        if (firstname) {
            filter.firstname = new RegExp(firstname, 'i'); 
        }
        const student = await StudentSchema.find(filter).populate({
            path: 'courses',
            populate: { path: 'masters' }
        });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSearchLastStudent = async (req, res) => {
    try {
        const { lastname } = req.params;
        const student = await StudentSchema.find({ lastname }).populate({
            path: 'courses',
            populate: { path: 'masters' }
        });
        if (student.length === 0) {
            return res.status(404).json({ message: "No student found with that lastname" });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getFilterStudent = async (req, res) => {
    try {
        const { AgeMinim } = req.query;
        const AgeFilter = AgeMinim ? { age: { $gte: parseInt(AgeMinim) } } : {}; 
        const students = await StudentSchema.find(AgeFilter).limit(4).populate({
            path: 'courses',
            populate: { path: 'masters' }
        }); 
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getTotalStudents2 = async (req, res) => {
    try {
        const student = await StudentSchema.find({}, { __v: 0 }) 
                                            .sort({ age: 1 }); 
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createStudent = async (req, res) => {
    try{
        const existingMaster = await StudentSchema.findOne(req.body);
        if (existingMaster) {
            return res.status(400).json({ message: 'Student already exists' });
        }
        const student = await StudentSchema.create(req.body);
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateStudent = async (req, res) => {
    try{
        const {id} = req.params;
        const student = await StudentSchema.findByIdAndUpdate(id, req.body);
        if(!student){
            return res.status(404).json({message: "Student not found"});
        }
        const updatedStudent = await StudentSchema.findById(id);
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteStudent = async (req, res) => {
    try{
        const {id} = req.params;
        const student = await StudentSchema.findByIdAndDelete(id);
        if(!student){
            return res.status(404).json({message: "Student not found"});
        }
        return res.status(200).json({message: "Student delected successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



module.exports = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
    getTotalStudents,
    getSearchStudent,
    getSearchLastStudent,
    getFilterStudent,
    getTotalStudents2
}