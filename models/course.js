const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    courseCode: {
        type: String,
        required: true
    },
    courseNumber: {
        type: Number,
        required: true
    },
    courseDesc: {
        type: String,
        required: true
    },
    studyTimeSoFar: {
        type: Number,
        required: true
    }
}, { timestamps: true })

// Creates the model right before exporting.
module.exports = mongoose.model("Course", courseSchema)