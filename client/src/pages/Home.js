import { useEffect, useState } from 'react'
import './Home.css'
// components
import CoursePanel from '../components/CoursePanel'
import AddCourseForm from '../components/AddCourseForm'

const Home = () => {
    const [courses, setCourses] = useState(null)

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/study-sessions')
            const json = await response.json()

            if (response.ok) {
                setCourses(json)
            }
        }

        fetchCourses()
    }, [])

    return (
        <div className='Home'>
            <div className="courses">
                {/* why do we use parenthesis in the return statement in the map function? */}
                {courses && courses.map((course) => (
                    <CoursePanel key={course._id} course={course} />
                ))}
            </div>

            <AddCourseForm />
        </div>
    )
}

export default Home