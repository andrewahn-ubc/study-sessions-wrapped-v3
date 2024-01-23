import { useEffect, useState } from "react"
import "./CourseOption.css"
import useSelectedContext from "../hooks/useSelectedContext"

const CourseOption = ({ course }) => {
    const {selected, setSelected} = useSelectedContext()

    console.log("course: ", course)
    console.log("selected: ", selected)

    const changeSelected = () => {
        if (selected == null) {
            setSelected(course)
        } else if (selected._id == course._id) {
            setSelected(null)
        }
    }

    return (
        <div className={selected == null ? 'nonSelectedOption' : (selected._id == course._id ? 'selectedOption' : 'nonSelectedOption')} 
        onClick={changeSelected} >
            <h1 className='courseOptionTitle'>{course.courseCode + " " + course.courseNumber}</h1>
            <p className='courseOptionDesc' ><strong>{course.courseDesc}</strong></p>
        </div>
    )
}

export default CourseOption