const CoursePanel = ({course}) => {
    return (
        <div className='CoursePanel'>
            <h1>{course.courseCode + " " + course.courseNumber}</h1>
            <p>{course.courseDesc} </p>
            <p>Time Studied: {course.studyTimeSoFar} </p>
        </div>
    )
}

export default CoursePanel