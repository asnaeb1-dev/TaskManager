import React, { useState } from 'react'
import NotesItem from '../../UIComponents/NotesItem/NotesItem';

const NotesScreen = () => {
    const [notesList, setNoteList] = useState([
        {
            id: 1,
            title: "Feed the dogs vigeyovrevurev",
            description: "pirwuvguvirew",
            startTime: Date.now(),
            endTime: Date.now(),
            isDone: false,
            isUrgent: false,
            dateCreated: "23rd April, 2024",
            isMovableToNextDate: false,
        },
        {
            id: 2,
            title: "wbrbwtbwbtrb",
            description: "Feed the dogs andnj;ergnegrere",
            startTime: Date.now(),
            endTime: Date.now(),
            isDone: false,
            isUrgent: false,
            dateCreated: "23rd April, 2024",
            isMovableToNextDate: false,
        },
        {
            id: 3,
            title: "cxcvvsfdvfdsfdsbfd",
            description: "Feed the dogs andnj;ergnegrere",
            startTime: Date.now(),
            endTime: Date.now(),
            isDone: false,
            isUrgent: false,
            dateCreated: "23rd April, 2024",
            isMovableToNextDate: false,
        },
        {
            id: 4,
            title: "liu,li,il,i",
            description: "Feed the dogs andnj;ergnegrere",
            startTime: Date.now(),
            endTime: Date.now(),
            isDone: false,
            isUrgent: false,
            dateCreated: "23rd April, 2024",
            isMovableToNextDate: false,
        },
        {
            id: 5,
            title: "Feed the dogs",
            description: "Feed the dogs andnj;ergnegrere Feed the dogs andnj;ergnegrere Feed the dogs andnj;ergnegrere Feed the dogs andnj;ergnegrere Feed the dogs andnj;ergnegrere Feed the dogs andnj;ergnegrere ",
            startTime: Date.now(),
            endTime: Date.now(),
            isDone: false,
            isUrgent: false,
            dateCreated: "23rd April, 2024",
            isMovableToNextDate: false,
        },
        {
            id: 6,
            title: "wbrbwtbwbtrb",
            description: "Feed the dogs andnj;ergnegrere",
            startTime: Date.now(),
            endTime: Date.now(),
            isDone: false,
            isUrgent: false,
            dateCreated: "23rd April, 2024",
            isMovableToNextDate: false,
        },
        {
            id: 7,
            title: "cxcvvsfdvfdsfdsbfd",
            description: "Feed the dogs andnj;ergnegrere",
            startTime: Date.now(),
            endTime: Date.now(),
            isDone: false,
            isUrgent: false,
            dateCreated: "23rd April, 2024",
            isMovableToNextDate: false,
        },
        {
            id: 8,
            title: "liu,li,il,i",
            description: "Feed the dogs andnj;ergnegrere",
            startTime: Date.now(),
            endTime: Date.now(),
            isDone: false,
            isUrgent: false,
            dateCreated: "23rd April, 2024",
            isMovableToNextDate: false,
        },
        {
            id: 9,
            title: "Feed the dogs",
            description: "Feed the dogs andnj;ergnegrere Feed the dogs andnj;ergnegrere Feed the dogs andnj;ergnegrere Feed the dogs andnj;ergnegrere Feed the dogs andnj;ergnegrere Feed the dogs andnj;ergnegrere ",
            startTime: Date.now(),
            endTime: Date.now(),
            isDone: false,
            isUrgent: false,
            dateCreated: "23rd April, 2024",
            isMovableToNextDate: false,
        },
        {
            id: 10,
            title: "wbrbwtbwbtrb",
            description: "Feed the dogs andnj;ergnegrere",
            startTime: Date.now(),
            endTime: Date.now(),
            isDone: false,
            isUrgent: false,
            dateCreated: "23rd April, 2024",
            isMovableToNextDate: false,
        },
        {
            id: 11,
            title: "cxcvvsfdvfdsfdsbfd",
            description: "Feed the dogs andnj;ergnegrere",
            startTime: Date.now(),
            endTime: Date.now(),
            isDone: false,
            isUrgent: false,
            dateCreated: "23rd April, 2024",
            isMovableToNextDate: false,
        },
        {
            id: 12,
            title: "liu,li,il,i",
            description: "Feed the dogs andnj;ergnegrere",
            startTime: Date.now(),
            endTime: Date.now(),
            isDone: false,
            isUrgent: false,
            dateCreated: "23rd April, 2024",
            isMovableToNextDate: false,
        }
    ]);
    return (
        <div className='w-[calc(100vw_-_5.3rem)] h-[calc(100vh_-_4rem)] overflow-y-scroll absolute z-[0] right-0 px-4 py-2'>
            <div role='notesgrid' className='grid grid-cols-1 pt-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
                {
                    notesList?.map((note, index) => {
                        return (
                            <NotesItem setsIsDone={() => } index={index % 5} key={note.id} notesProps={note} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NotesScreen