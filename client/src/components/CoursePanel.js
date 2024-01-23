import useCoursesContext from '../hooks/useCoursesContext'
import './CoursePanel.css'

const CoursePanel = ({course}) => {
    const { courses, dispatch } = useCoursesContext()

    const deleteCourse = async () => {
        const response = await fetch("/api/study-sessions/" + course._id, {
            method: "DELETE"
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type: "DELETE-COURSE", payload: json})
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