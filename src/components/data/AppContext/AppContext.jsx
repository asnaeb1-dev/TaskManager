import { createContext, useState } from "react";
import AddNotesContext from "./AddNotesContext";

export const TaskerAppContext = createContext();

const AppContext = ({ children }) => {
    const [appState, setAppState] = useState();
    const [currentPage, setCurrentPage] = useState();
    const contextState = {
        appState, setAppState,
        currentPage, setCurrentPage
    }
    return (
        <TaskerAppContext.Provider value={contextState}>
            <AddNotesContext>
                {children}
            </AddNotesContext>
        </TaskerAppContext.Provider>
    )
}

export default AppContext