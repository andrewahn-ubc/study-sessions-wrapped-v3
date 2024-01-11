const Course = require('./models/course')
const mongoose = require('mongoose')

const getAllCourses = (req, res) => {
    res.status(200).json({mssg: "get all courses"})
}

const getCourse = (req, res) => {
    res.status(200).json({mssg: "get a single course"})
}

const createCourse = (req, res) => {
    res.status(200).json({mssg: "create a course"})
}

const updateCourse = (req, res) => {
    res.status(200).json({mssg: "update a course"})
}

const deleteCourse = (req, res) => {
    res.status(200).json({mssg: "delete a course"})
}

module.exports = {
    getAllCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
}