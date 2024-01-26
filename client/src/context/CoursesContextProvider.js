import { createContext, useReducer } from "react"

export const CoursesContext = createContext()

export const coursesReducer = (state, action) => {
    switch (action.type) {
        case 'SET-COURSES':
            return {
                courses: action.payload
            }
        case 'ADD-COURSE':
            return {
                courses: [action.payload, ...state.courses]
            }
        case 'DELETE-COURSE':
            return {
                courses: state.courses.filter((course) => course._id !== action.payload._id)
            }
        case 'UPDATE-COURSE':
            return {
                courses: state.courses.map((course) => {
                    if (course._id == action.payload._id) {
                        // assumes that action.payload will contain every property of the course.
                        course = action.payload
                    }
                })
            }
        default:
            return state
    }
}

export const CoursesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(coursesReducer, {
        courses: null
    })

    return (
        <CoursesContext.Provider value={{...state, dispatch}}>
            {children}
        </CoursesContext.Provider>
    )
} 
