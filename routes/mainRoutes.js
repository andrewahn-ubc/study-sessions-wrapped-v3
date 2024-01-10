const express = require('express')
const {
    getAllCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
} = require('../requestHandlers')

const router = express.Router()

// get all courses
router.get('/', getAllCourses)

// get a single course
router.get('/:id', getCourse)

// post a course
router.post('/', createCourse)

// update a certain course
router.patch('/:id', updateCourse)

// delete a course
router.delete('/:id', deleteCourse)

module.exports = router