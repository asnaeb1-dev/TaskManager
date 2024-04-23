import React from 'react'
import { NOTES_COLOR } from '../../../data/Utils/Strings';

const NotesItem = ({ notesProps, index }) => {
    const { title, description } = notesProps;
    return (
        <div
            style={{ background: NOTES_COLOR[index] }}
            className='w-full h-full rounded-2xl p-4  hover:shadow-2xl max-h-[200px] min-h-[200px]'
        >
            <h1 className=' font-extrabold text-2xl text-zinc-700 overflow-hidden'>{title}</h1>
            <p className='overflow-hidden'>{description}</p>
        </div>
    )
}

export default NotesItem