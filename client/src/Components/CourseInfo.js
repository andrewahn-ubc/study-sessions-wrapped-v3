


const CourseInfo = ({ course }) => {
    return (
        <div>
            {/* <h1>{course.courseCode + " " + course.courseNumber}</h1> */}
            <h2>{course.courseDesc} </h2>
            {/* <h3>Time Studied So Far: {course.studyTimeSoFar}</h3> */}
        </div>
    )
}

export default CourseInfo