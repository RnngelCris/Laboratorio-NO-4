const CourseSchema = require('../models/course');

const getCourses = async(req, res) => {
    try{
        const course = await CourseSchema.find({}).populate('masters');
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getCourse = async (req, res) => {
    try{
        const { id } = req.params;
        const course = await CourseSchema.findById(id).populate('masters');
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createCourse = async (req, res) => {
    try{
        const existingMaster = await CourseSchema.findOne(req.body);
        if (existingMaster) {
            return res.status(400).json({ message: 'Master already exists' });
        }
        const course = await CourseSchema.create(req.body);
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateCourse = async (req, res) => {
    try{
        const {id} = req.params;
        const course = await CourseSchema.findByIdAndUpdate(id, req.body);
        if(!course){
            return res.status(404).json({message: "Product not found"});
        }
        const updatedCourse = await CourseSchema.findById(id);
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteCourse = async (req, res) => {
    try{
        const {id} = req.params;
        const course = await CourseSchema.findByIdAndDelete(id);
        if(!course){
            return res.status(404).json({message: "Product not found"});
        }
        return res.status(200).json({message: "Course delected successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
}