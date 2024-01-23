import { createContext } from "react"

export const CoursesContext = createContext()

export const coursesReducer = (state, action) => {
    switch (action.type) {
        case 'SET-COURSES':
            return (action.payload)
        case 'ADD-COURSE':
            return [action.payload, ...state]
        case 'DELETE-COURSE':
            return (state.filter((course) => {course._id !== action.payload._id}))
        default:
            return state
    }
}

export const CoursesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(coursesReducer, {})

    return (
        <CoursesContext.Provider value={{state, dispatch}}>
            {children}
        </CoursesContext.Provider>
    )
}