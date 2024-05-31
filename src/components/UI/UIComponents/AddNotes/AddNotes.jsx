import React, { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AddNotesContextInstance } from '../../../data/AppContext/AddNotesContext'

import { APP_DESIGN_COLORS, NOTES_COLOR, TODO_TYPES, TaskPriority } from '../../../data/Utils/Strings';

import { RxCross1 } from "react-icons/rx";

// import "./addnotes.css"
import ColorSelector from './AddNotesComponents/ColorSelector/ColorSelector';
import PrioritySelector from './AddNotesComponents/PrioritySelector/PrioritySelector';
import DurationPicker from './AddNotesComponents/DurationPicker/DurationPicker';
import TaskStateSelector from './AddNotesComponents/TaskStateSelector/TaskStateSelector';
import PrivacySelector from './AddNotesComponents/PrivacySelector/PrivacySelector';
import TagPicker from './AddNotesComponents/TagPicker/TagPicker';

const AddNotes = () => {
    const { isAddNotesOpen, setAddNotesOpen } = useContext(AddNotesContextInstance)

    if (!isAddNotesOpen ) return null;
    return createPortal(
        <div role='add-notes-portal' className='w-full h-full inset-0 bg-black/30 absolute z-10 '>
            <div className={`h-[90%] rounded-tr-lg bottom-0 w-full md:h-full lg:w-[500px] flex flex-col rounded-tl-lg rounded-bl-lg bg-white p-4 z-20 absolute animateSlideIn md:right-0`}>
                <AddTaskHeader setAddNotesOpen={() => setAddNotesOpen(false)} />
                <AddTaskForm />
            </div>
        </div>,
        document.getElementById("add-notes-portal")
    )
}

const AddTaskHeader = ({ setAddNotesOpen }) => {
    return (
        <div role='titlebar' className='w-full flex flex-row-reverse justify-between items-center'>
            <button onClick={() => setAddNotesOpen(false)} className=' hover:bg-yellow-500/25 p-2 rounded-full' role='close'>
                <RxCross1 color={APP_DESIGN_COLORS.MAIN_COLOR} size={18} />
            </button>
            <h1 className=' text-2xl font-semibold'>
                Add Note
            </h1>
        </div>
    )
}

const AddTaskForm = ({ handleNoteSubmit }) => {
    
    const [taskData, setTaskData] = useState({
        taskTitle: "",
        taskType: "",
        isTaskPrivate: false,
        taskPriority: TaskPriority.HIGH,
        taskNoteColor: "",
        taskTags: [],
        taskStartTime: "",
        taskEndTime: "",
        taskDescription: ""
    })

    useEffect(() => {
        console.log("taskdata", taskData);
    }, [taskData])

    const updateTaskData = (type, info) => {
        setTaskData(taskInfo => {
            const tempTaskInfo = {...taskInfo};
            switch (type) {
                case "title":
                    tempTaskInfo.taskTitle = info;
                    return tempTaskInfo;
                
                case "color":
                    tempTaskInfo.taskNoteColor = info;
                    return tempTaskInfo;
                
                case "privacy":
                    tempTaskInfo.isTaskPrivate = info;
                    return tempTaskInfo;
                
                case "desc":
                    tempTaskInfo.taskDescription = info;
                    return tempTaskInfo;

                case "priority":
                    tempTaskInfo.taskPriority = info;
                    return tempTaskInfo;
                
                default:
                    return tempTaskInfo;
            }
        })
    }
    
    return (
        <div onSubmit={handleNoteSubmit} className='h-full flex flex-col gap-7 my-6 text-sm overflow-y-auto'>
            <div role='notetitle' className='w-full flex flex-row border-b-2 focus:border-yellow-500 pb-2'>
                <select defaultValue={"def"} className=' outline-none font-semibold rounded-lg p-2 bg-yellow-500/25 text-black'>
                    <option value={"def"} disabled selected hidden>Select Todo Type</option>
                    <option value={"Task"}>{TODO_TYPES.TASK}</option>
                    <option value={"Habit"}>{TODO_TYPES.HABIT}</option>
                    <option value={"Chore"}>{TODO_TYPES.CHORE}</option>
                    <option value={"Misc"}>{TODO_TYPES.MISC}</option>
                    <option value={"Reminder"}>{TODO_TYPES.REMINDER}</option>
                </select>
                <input
                    onChange={e => updateTaskData("title", e.target.value)}
                    className=' outline-none text-yellow-500 px-2 w-full  border-zinc-200 '
                    spellCheck={true}
                    type={"text"}
                    placeholder='Title...'
                    name='tasktitle'
                />
            </div>
            <PrivacySelector
                value={taskData.isTaskPrivate}
                setValue={val => updateTaskData("privacy", val)}
            />
            <PrioritySelector
                taskPriority={taskData.taskPriority}
                setTaskPriority={priority => updateTaskData("priority", priority)}
            />
            <TagPicker updateTagList={tagList => console.log(tagList)} tagList={[]} />
            <ColorSelector
                colorSelected={taskData.taskNoteColor}
                handleColorSelect={color => updateTaskData("color", color)}
            />
            <DurationPicker />
            <div className='flex flex-col gap-2'>
                <p className=' font-semibold'>Description</p>
                <textarea onChange={e => updateTaskData("desc", e.target.value)} placeholder='Task Description' className='border-2 text-yellow-500 focus:border-yellow-500 rounded-lg w-full h-[100px]  lg:h-[calc(100vh_-_740px)] lg:min-h-[calc(100vh_-_740px)] lg:max-h-[calc(100vh_-_740px)] outline-none p-2'></textarea>
            </div>
            <TaskStateSelector />
            <div className='flex absolute items-center bg-white h-14 bottom-0'>
                <button className=' bg-yellow-500/50 px-5 py-2 rounded-lg font-semibold  hover:scale-105'>
                    Add Note
                </button>
            </div>
        </div>
    )
}

export default AddNotes