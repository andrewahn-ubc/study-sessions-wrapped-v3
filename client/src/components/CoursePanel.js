import useCoursesContext from '../hooks/useCoursesContext'
import './CoursePanel.css'

const CoursePanel = ({course}) => {
    const { courses, dispatch } = useCoursesContext()

    // console.log(JSON.parse(JSON.stringify(course)))
    // const courseObject = JSON.parse(JSON.stringify(course))
    // // const courseObject = JSON.parse(json)
    // console.log(courseObject._id)
    // // console.log(Object.keys(course))

    const deleteCourse = async () => {
        const response = await fetch("/api/study-sessions/" + course._id, {
            method: "DELETE"
        })

        const json = await response.json()
        const courseObject = JSON.parse(JSON.stringify(json))

        if (response.ok) {
            dispatch({type: "DELETE-COURSE", payload: courseObject})
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