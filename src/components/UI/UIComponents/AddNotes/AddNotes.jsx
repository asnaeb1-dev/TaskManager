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
            <div className='h-full w-[450px] flex flex-col rounded-tl-lg rounded-bl-lg bg-white p-4 z-20 lg:`animateSlideIn absolute bottom-0 lg:right-0'>
                <div role='titlebar' className='w-full flex flex-row-reverse justify-between items-center'>
                    <button onClick={() => setAddNotesOpen(false)} className=' hover:bg-yellow-500/25 p-2 rounded-full' role='close'>
                        <RxCross1 color={APP_DESIGN_COLORS.MAIN_COLOR} size={18} />
                    </button>
                    <p>
                        Add Note
                    </p>
                </div>
                <form onSubmit={handleNoteSubmit} className='py-2 h-full flex flex-col gap-3'>
                    <div role='notetitle' className='w-full'>
                        <input
                            className=' outline-none text-yellow-500 border-b-2 border-zinc-200 focus:border-yellow-500'
                            spellCheck={true}
                            type={"text"}
                            placeholder='Title...'
                            name='tasktitle'
                        />
                        <button type={"button"}>
                            <FaLock size={16} color={APP_DESIGN_COLORS.MAIN_COLOR} />
                        </button>
                    </div>
                    <ColorSelector colorSelected={colorSelected} handleColorSelect={e => setColorSelected(e.target.id)} />
                    <div className='absolute bottom-4 z-10 '>
                        <button type={"submit"} className=' border-2 border-yellow-500 px-4 py-1 rounded-lg hover:bg-yellow-500 hover:text-white'>
                            Add Note
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.getElementById("add-notes-portal")
    )
}

const ColorSelector = ({ handleColorSelect, colorSelected }) => {
    return (
        <div onClick={e => handleColorSelect(e)} className='w-full h-7 flex flex-row gap-3'>
            {
                NOTES_COLOR.map((color, index) => {
                    return (
                        <button id={`${color}`} style={{ background: color }} className={` w-10 flex outline-none items-center justify-center rounded-xl ${colorSelected === color && " border-2 border-zinc-800"}`} type={"button"} role={"button"}>
                            <IoMdCheckmark size={15} color={"black"} />
                        </button>
                    )
                })
            }
        </div>
    )
}

export default AddNotes