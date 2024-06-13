import React, { useContext, useEffect, useState } from 'react'
import NotesItem from '../../UIComponents/NotesItem/NotesItem';
import HorizontalCalander from '../../UIComponents/HorizontalCalander/HorizontalCalander';
import { TaskerAppContext } from '../../../data/AppContext/AppContext';

const NotesScreen = () => {
    const { userDetails, setUserDetails } = useContext(TaskerAppContext);
    const [notesList, setNoteList] = useState([]);


    useEffect(() => {
        if(userDetails) {
            const choreList = userDetails?.dbResponse?.todoList?.Chore ?? [];
            const habitList = userDetails?.dbResponse?.todoList?.Habit ?? [];
            const miscList = userDetails?.dbResponse?.todoList?.Misc ?? [];
            const reminderList = userDetails?.dbResponse?.todoList?.Reminder ?? [];
            const taskList = userDetails?.dbResponse?.todoList?.Task ?? [];
            setNoteList([...choreList, ...miscList, ...reminderList, ...taskList, ...habitList])
        }
    }, [userDetails])

    return (
        <div className='w-[calc(100vw_-_5.3rem)] h-[calc(100vh_-_4rem)] overflow-y-scroll absolute z-[0] right-0 px-4 py-2'>
            <div className='w-full h-20 sticky top-0 bg-white rounded-xl shadow-md'>
                <HorizontalCalander />
            </div>
            <div role='notesgrid' className='grid grid-cols-1 pt-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 2xl:grid-cols-5'>
                {
                    notesList?.map((note, index) => {
                        return (
                            <NotesItem index={index % 5} key={note.id} notesProps={note} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NotesScreen