import { useContext } from "react"
import { SelectedContext } from "../context/SelectedContextProvider"


const useSelectedContext = () => {
    const context = useContext(SelectedContext)

    if (!context) {
        throw Error("useSelectedContext was used outside of the scope of the context provider.")
    }

    return context
}

export default useSelectedContext