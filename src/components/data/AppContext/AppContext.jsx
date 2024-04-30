import { createContext, useState } from "react";
import AddNotesContext from "./AddNotesContext";

export const TaskerAppContext = createContext();

const AppContext = ({ children }) => {
    const [appState, setAppState] = useState();

    return (
        <TaskerAppContext.Provider value={{appState, setAppState}}>
            <AddNotesContext>
                {children}
            </AddNotesContext>
        </TaskerAppContext.Provider>
    )
}

export default AppContext