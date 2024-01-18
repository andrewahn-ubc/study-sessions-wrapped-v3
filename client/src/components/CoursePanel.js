import './CoursePanel.css'

const CoursePanel = ({course}) => {
    return (
        <div className='coursePanel'>
            <h1 className='courseTitle' >{course.courseCode + " " + course.courseNumber}</h1>
            <p className='courseDesc' >{course.courseDesc} </p>
            <p className='studyTime' >Time Studied: {course.studyTimeSoFar} </p>
        </div>
    )
}

export default CoursePanel