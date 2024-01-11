const Course = require('./models/course')
const mongoose = require('mongoose')

const getAllCourses = async (req, res) => {
    const courses = await Course.find({}).sort({createdAt: -1})

    res.status(200).json(courses)
}

const getCourse = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid ID.'})
    }

    // we could also write "await Course.findById(id)"
    const course = await Course.findById(id)

    if (!course) {
        return res.status(404).json({error: 'Could not find course.'})
    }

    res.status(200).json(course)
}

const createCourse = async (req, res) => {
    const {courseCode, courseNumber, courseDesc, studyTimeSoFar} = req.body

    // if Course is unable to create a new course, it'll throw an error, so we MUST wrap
    // it in a try-catch.
    try {
        const course = await Course.create({courseCode, courseNumber, courseDesc, studyTimeSoFar})
        res.status(200).json(course)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updateCourse = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid ID."})
    }

    const course = await Course.findOneAndUpdate({_id: id}, req.body)

    if (!course) {
        return res.status(404).json({error: 'Could not find course.'})
    }

    const course1 = await Course.findById(id)

    res.status(200).json(course1)
}

const deleteCourse = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid ID."})
    }

    const course = Course.findOneAndDelete({_id: id})

    if (!course) {
        return res.status(404).json({error: 'Could not find course.'})
    }

    res.status(200).json(course)
}

module.exports = {
    getAllCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
}