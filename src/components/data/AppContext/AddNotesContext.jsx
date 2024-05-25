import { createContext, useState } from "react";

export const AddNotesContextInstance = createContext();

const AddNotesContext = ({ children }) => {

    const [isAddNotesOpen, setAddNotesOpen] = useState(false);
    const [addNotesState, setAddNotesState] = useState({})

    return (
        <AddNotesContextInstance.Provider value={{ isAddNotesOpen, setAddNotesOpen, addNotesState, setAddNotesState }}>
            {children}
        </AddNotesContextInstance.Provider>
    )
}

export default AddNotesContext;