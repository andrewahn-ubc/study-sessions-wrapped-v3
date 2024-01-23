import { useState, useEffect } from "react"
import "./Stopwatch.css"

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

    return (
        <div className="Stopwatch">
            <h1>{timeDisplay(hours)} : {timeDisplay(minutes)} : {timeDisplay(seconds)}</h1>

            <button onClick={startAndStop}>{running ? "STOP" : "START"}</button>
            <button onClick={reset}>RESET</button>
        </div>
    )
}

export default Stopwatch