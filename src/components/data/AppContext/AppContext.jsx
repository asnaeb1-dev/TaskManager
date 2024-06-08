import { createContext, useState } from "react";
import AddNotesContext from "./AddNotesContext";

export const TaskerAppContext = createContext();

const AppContext = ({ children }) => {
    const [appState, setAppState] = useState();
    const [currentPage, setCurrentPage] = useState();
    const [darkMode, setDarkMode] = useState(true);

    const [showUserProfile, setShowUserProfile] = useState(false);
    const [userDetails, setUserDetails] = useState({})
    const contextState = {
        appState, setAppState,
        currentPage, setCurrentPage,
        darkMode, setDarkMode,

        userDetails, setUserDetails,
        showUserProfile, setShowUserProfile
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