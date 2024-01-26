import { useContext } from "react"
import { CoursesContext } from "../context/CoursesContextProvider"


const useCoursesContext = () => {
    const context = useContext(CoursesContext)
    // context is now equal to {courses, dispatch}

    if (!context || context === undefined) {
        throw Error("useCoursesContext was used outside of the scope of the context provider.")
    }

    return context
}

export default useCoursesContext