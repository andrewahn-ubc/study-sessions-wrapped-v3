import "./CourseOption.css"

const CourseOption = ({ course, selected, setSelectFunction }) => {

    // const courseObject = JSON.parse(JSON.stringify(course))
    // const courseObject = JSON.parse(JSON.stringify(course))
    // console.log(courseObject._id)

    const changeSelected = () => {
        
        // console.log(course)
        // console.log(Object.keys(course))
        
        if (selected) {
            // the case where this course is currently selected and we want to de-select it
            setSelectFunction(null)
        } else {
            // the case where this course is NOT select it and we want to select
            setSelectFunction(course._id)
        }
        selected = !selected
    }

    return (
        <div className={selected ? 'selectedOption' : 'nonSelectedOption'} 
        onClick={changeSelected} >
            <h1 className='courseOptionTitle'>
                {course.courseCode + " " + course.courseNumber}
            </h1>
            <p className='courseOptionDesc' ><strong>{course.courseDesc}</strong></p>
        </div>
    )
}

export default CourseOption