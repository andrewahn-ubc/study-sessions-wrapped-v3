import { useEffect, useState } from 'react'
import './Home.css'
// components
import CoursePanel from '../components/CoursePanel'
import AddCourseForm from '../components/AddCourseForm'
import Stopwatch from "../components/Stopwatch"
import useCoursesContext from '../hooks/useCoursesContext'

const Home = () => {
    const { courses, dispatch } = useCoursesContext()
    var courseList = [];

    useEffect(() => {
        const fetchCourses = async () => {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            const response = await fetch("http://localhost:8000/api/study-sessions/", requestOptions)
            const json = await response.json()

            if (response.ok) {
                for (let i = 0; i < json.length; i++) {
                    courseList[i] = json[i];
                }
                dispatch({type: "SET-COURSES", payload: courseList})
            }
        }

        fetchCourses()

    }, [dispatch])

    return (
        <div className='Home'>
            <Stopwatch />

            <div className="courses">
                {/* why do we use parenthesis in the return statement in the map function? */}
                {courseList && courseList.map((course) => (
                    <CoursePanel key={course._id} course={course} />
                ))}
            </div>

            <AddCourseForm />
        </div>
    )
}

export default Home