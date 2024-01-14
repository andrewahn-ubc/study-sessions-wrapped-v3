import { useEffect, useState } from 'react'
import AddCourse from './AddCourse'
import CourseInfo from './CourseInfo'


const ViewCourses = () => {
    const [courses, setCourses] = useState(null)

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('http://localhost:8000/api/study-sessions/')

            const json = await response.json()

            if (response.ok) {
                setCourses(json)
            }
        }

        fetchCourses()
    }, [])

    return (
        <div>
            <div className="courses">
                {courses && courses.map((course) => {
                    <CourseInfo key={course._id} course={course} />
                })}
            </div>
            <AddCourse></AddCourse>
        </div>
    )
}

export default ViewCourses