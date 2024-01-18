import { useEffect, useState } from 'react'
import CoursePanel from '../components/CoursePanel'

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
        </div>
    )
}

export default Home