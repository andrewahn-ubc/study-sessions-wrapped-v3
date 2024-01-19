import "./AddCourseForm.css"
import { useState } from 'react'

const AddCourseForm = () => {
    const [courseCode, setCC] = useState('')
    const [courseNumber, setCN] = useState('')
    const [courseDesc, setCD] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const course = {courseCode, courseNumber, courseDesc}

        const response = await fetch('api/study-sessions', {
            method: "POST",
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            console.log("Error occurred while adding course.")
        } else {
            console.log('Course successfully added.')
        }


    }

    return (
        <form className="addCourseForm" onSubmit={handleSubmit}>
            <h1>Add Course</h1>

            <div className="inputs">
                <div className="inputLine">
                    <label>Course Code (eg. MATH): </label>
                    <input type="text" onChange={(e) => {setCC(e.target.value)}} value={courseCode}/>
                </div>

                <div className="inputLine">
                    <label>Course Number: </label>
                    <input type="number" onChange={(e) => {setCN(e.target.value)}} value={courseNumber}/>
                </div>
                
                <div className="inputLine">
                    <label>Course Description: </label>
                    <input type="text" onChange={(e) => {setCD(e.target.value)}} value={courseDesc}/>
                </div>
            </div>

            <button>Submit</button>
        </form>
    )
}

export default AddCourseForm