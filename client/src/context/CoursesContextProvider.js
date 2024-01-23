import { createContext } from "react"

export const CoursesContext = createContext()

export const CoursesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer({})

    return (
        <CoursesContext.Provider value={{state, dispatch}}>
            {children}
        </CoursesContext.Provider>
    )
}