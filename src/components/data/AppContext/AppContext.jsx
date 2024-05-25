import { createContext, useState } from "react";
import AddNotesContext from "./AddNotesContext";

export const TaskerAppContext = createContext();

const AppContext = ({ children }) => {
    const [appState, setAppState] = useState();
    const [navBarState, setNavBarState] = useState(0);
    const contextState = {
        appState, setAppState,
        navBarState, setNavBarState
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