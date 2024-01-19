import './CoursePanel.css'

const CoursePanel = ({course}) => {
    const deleteCourse = async () => {
        const response = await fetch("/api/study-sessions/" + course._id, {
            method: "DELETE"
        })

        if (!response.ok) {
            console.log("Error occurred while deleting")
        }
    }

    return (
        <div className='coursePanel'>
            <h1 className='courseTitle' >{course.courseCode + " " + course.courseNumber}</h1>
            <p className='courseDesc' ><strong>{course.courseDesc}</strong></p>
            <p className='studyTime' >Time Studied: {course.studyTimeSoFar} </p>
            <span className="deleteButton" onClick={deleteCourse}>delete</span>
        </div>
    )
}

export default CoursePanel