import { useState } from 'react'
import './AddCourse.css'

const AddCourse = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);
  const [desc, setDesc] = useState('');

  const addToList = () => {
    console.log('Added course.')
  }

  return (
    <div className="App">
      <h1>Study Session Tracker</h1>

      <div className="courseCode">
        <label>Course Code:</label>
        <input type='text' placeholder='Eg. MATH' onChange={(event) => {
          setName(event.target.value);
        }}/>
        <input type='number' placeholder='Eg. 100' onChange={(event) => {
          setNumber(event.target.value);
        }}/>
      </div>

      <div className="courseDescription">
        <label>Course Description:</label>
        <input className='course-description' type='text' 
        placeholder='Eg. Differential Calculus' 
        onChange={(event) => setDesc(event.target.value)} />
      </div>

      <button className='add-button' onClick={(addToList)}>Add To Courses</button>
    </div>
    )
}

export default AddCourse