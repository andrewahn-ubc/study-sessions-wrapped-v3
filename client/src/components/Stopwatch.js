import { useState, useEffect } from "react"
import "./Stopwatch.css"
import useCoursesContext from "../hooks/useCoursesContext"
import CourseOption from "./CourseOption"

const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)
    // The actual timer
    useEffect(() => {
        let intervalId
        if (running) {
          // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
          intervalId = setInterval(() => setTime(time + 1), 1000)
        }
        return () => clearInterval(intervalId);
    }, [running, time])
    // Time calculation
    const hours = Math.floor(time/3600);
    const minutes = Math.floor((time/60) % 60);
    const seconds = Math.floor(time % 60);
    const startAndStop = () => {
        setRunning(!running)
    }
    const reset = () => {
        setTime(0)
    }
    const timeDisplay = (unit) => {
        return (unit < 10) ? "0" + unit : unit
    }

    // courses
    const { courses, dispatch } = useCoursesContext()
    const [selectedID, setSelected] = useState(null)

    const addSession = () => {
        if (selectedID == null) {
            return alert("You must select a course haha")
        }

        const courseToUpdate = courses.find((course) => course._id == selectedID)

        courseToUpdate.studyTimeSoFar += time

        dispatch({type: "UPDATE-COURSE", payload: courseToUpdate})
    }

    return (
        <div className="Stopwatch">
            <div className="courseSelect" >
                {courses && courses.map((course) => (
                    <CourseOption key={course._id} course={course} 
                    selected={selectedID == course._id ? true : false} 
                    setSelectFunction={setSelected}/>
                ))}
            </div>

            <h1 className="time">{timeDisplay(hours)} : {timeDisplay(minutes)} : {timeDisplay(seconds)}</h1>

            <div className="buttons">
                <button onClick={startAndStop}>{running ? "STOP" : "START"}</button>
                <button onClick={reset}>RESET</button>
                <button onClick={addSession}>ADD SESSION</button>
            </div>
        </div>
    )
}

export default Stopwatch