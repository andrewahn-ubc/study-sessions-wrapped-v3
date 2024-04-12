const mongoose = require('mongoose')

// creates structure in our data
const courseSchema = new mongoose.Schema({
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

// rreates the model right before exporting.
module.exports = mongoose.model("Course", courseSchema)