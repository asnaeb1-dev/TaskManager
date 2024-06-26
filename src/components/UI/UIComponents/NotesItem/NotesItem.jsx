import React from 'react'
import { NOTES_COLOR } from '../../../data/Utils/Strings';
import Draggable from 'react-draggable';
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const NotesItem = ({ notesProps, index, setsIsDone }) => {
    const {
        taskTitle,
        taskDescription,
        isTaskPrivate
    } = notesProps;
    
    console.log("title", taskTitle);

    return (
        <div className={`w-full h-full bg-yellow-900 rounded-b-2xl rounded-tl-2xl`}>
            <div
                style={{ background: NOTES_COLOR[index] }}
                className='w-full flex flex-col select-none h-full rounded-2xl p-4 cursor-pointer  hover:shadow-2xl max-h-[250px] min-h-[250px]'
            >
                <div className='flex flex-col flex-1'>
                    <h1 className=' font-extrabold text-3xl text-zinc-700 overflow-hidden whitespace-nowrap text-ellipsis'>{taskTitle}</h1>
                    <p className='overflow-hidden max-h-[100px] py-1'>{taskDescription}</p>
                </div>
                <div className='w-full flex flex-row justify-end gap-3'>
                    <button className=' bg-white/50 p-2 rounded-full hover:bg-white/75 outline-none'>
                        <MdModeEditOutline size={20} />
                    </button>
                    <button className=' bg-white/50 p-2 rounded-full hover:bg-white/75 outline-none'>
                        <MdDelete size={20} />
                    </button>
                    <button role='done' onClick={() => setsIsDone()} className=' bg-white/50 p-2 outline-none rounded-full hover:bg-white/75'>
                        {isTaskPrivate ? <FaCheck size={20} /> : <ImCross size={18} />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotesItem