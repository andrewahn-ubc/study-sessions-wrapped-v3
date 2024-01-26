import { useEffect, useState } from 'react'
import './Home.css'
// components
import CoursePanel from '../components/CoursePanel'
import AddCourseForm from '../components/AddCourseForm'
import Stopwatch from "../components/Stopwatch"
import useCoursesContext from '../hooks/useCoursesContext'

const Home = () => {
    const { courses, dispatch } = useCoursesContext()

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/study-sessions')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: "SET-COURSES", payload: json})
            }
        }

        fetchCourses()
    }, [dispatch])

    return (
        <div className='Home'>
            <Stopwatch />

            <div className="courses">
                {/* why do we use parenthesis in the return statement in the map function? */}
                {courses && courses.map((course) => (
                    <CoursePanel key={course == (null || undefined) ? null : course._id} course={course} />
                ))}
            </div>

            <AddCourseForm />
        </div>
    )
}

export default Home