import React, { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AddNotesContextInstance } from '../../../data/AppContext/AddNotesContext'

import { APP_DESIGN_COLORS, NOTES_COLOR } from '../../../data/Utils/Strings';

import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaLock } from "react-icons/fa";

import "./addnotes.css"

const AddNotes = () => {
    const { isAddNotesOpen, setAddNotesOpen } = useContext(AddNotesContextInstance)
    const [colorSelected, setColorSelected] = useState("");
    const handleNoteSubmit = e => {
        e.preventDefault()
    }

    if (!isAddNotesOpen ) return null;
    return createPortal(
        <div role='add-notes-portal' className='w-full h-full inset-0 bg-black/30 absolute z-10 '>
            <div className={`h-full w-[600px] flex flex-col rounded-tl-lg rounded-bl-lg bg-white p-4 z-20 absolute animateSlideIn  lg:right-0`}>
                <AddTaskHeader setAddNotesOpen={() => setAddNotesOpen(false)} />
                <AddTaskForm
                    handleNoteSubmit={handleNoteSubmit}
                    colorSelected={colorSelected}
                    setColorSelected={setColorSelected}
                />
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

const AddTaskForm = ({ handleNoteSubmit, colorSelected, setColorSelected }) => {
    return (
        <form onSubmit={handleNoteSubmit} className='h-full flex flex-col gap-3 my-6'>
            <div role='notetitle' className='w-full flex flex-row border-b-2 focus:border-yellow-500 pb-2'>
                <select defaultValue={"def"} className=' outline-none rounded-lg p-2 bg-yellow-500/25 text-black'>
                    <option value={"def"} disabled selected hidden>Select Todo Type</option>
                    <option value={"Task"}>Task</option>
                    <option value={"Habit"}>Habit</option>
                    <option value={"Chore"}>Chore</option>
                    <option value={"Misc"}>Misc</option>
                    <option value={"Reminder"}>Reminder</option>
                </select>
                <input
                    className=' outline-none text-yellow-500 px-2 w-full  border-zinc-200 '
                    spellCheck={true}
                    type={"text"}
                    placeholder='Title...'
                    name='tasktitle'
                />
            </div>
            <ColorSelector
                colorSelected={colorSelected}
                handleColorSelect={e => setColorSelected(e.target.id)}
            />
            {/* <div className=''>
                <button type={"submit"} className=' border-2 border-yellow-500 px-4 py-1 rounded-lg hover:bg-yellow-500 hover:text-white'>
                    Add Note
                </button>
            </div> */}
        </form>
    )
}

const ColorSelector = ({ handleColorSelect, colorSelected }) => {
    return (
        <div className='flex flex-row items-center'>
            <p>Select note color</p>
            <div onClick={e => handleColorSelect(e)} className='w-full h-7 flex flex-row gap-3'>
                {
                    NOTES_COLOR.map((color, index) => {
                        return (
                            <button
                                key={color}
                                id={`${color}`}
                                style={{ background: color }}
                                className={` w-10 h-10 flex outline-none items-center justify-center rounded-full ${colorSelected === color && " border-2 border-zinc-800"}`}
                                type={"button"}
                                role={"button"}
                            >
                                <IoMdCheckmark size={15} color={"black"} />
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AddNotes