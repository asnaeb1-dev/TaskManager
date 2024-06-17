import { Children, createContext, useState } from "react";

const TaskContextInstance = createContext();

const TaskContext = ({ children }) => {

    const [task, setTask] = useState([]);
    const [habit, setHabit] = useState([]);
    const [misc, setMisc] = useState([]);
    const [reminder, setReminder] = useState([]);
    const [chore, setChore] = useState([]);

    const taskState = {
        task, setTask,
        habit, setHabit,
        misc, setMisc,
        reminder, setReminder,
        chore, setChore,
    }

    return (
        <TaskContextInstance.Provider value={taskState}>
            {children}
        </TaskContextInstance.Provider>
    )
}