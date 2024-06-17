import React, { useContext, useEffect, useState } from 'react'
import NotesItem from '../../UIComponents/NotesItem/NotesItem';
import HorizontalCalander from '../../UIComponents/HorizontalCalander/HorizontalCalander';
import { TaskerAppContext } from '../../../data/AppContext/AppContext';

const NotesScreen = () => {
    const { userDetails, userTaskDetails } = useContext(TaskerAppContext);
    const [notesList, setNoteList] = useState([]);


    useEffect(() => {
        if(userTaskDetails && userDetails) {
            const choreList = userTaskDetails?.todoList?.Chore ?? [];
            const habitList = userTaskDetails?.todoList?.Habit ?? [];
            const miscList = userTaskDetails?.todoList?.Misc ?? [];
            const reminderList = userTaskDetails?.todoList?.Reminder ?? [];
            const taskList = userTaskDetails?.todoList?.Task ?? [];
            setNoteList([...choreList, ...miscList, ...reminderList, ...taskList, ...habitList])
        }
    }, [userTaskDetails, userDetails])

    return (
        <div className='w-[calc(100vw_-_5.3rem)] h-[calc(100vh_-_4rem)] overflow-y-scroll absolute z-[0] right-0 px-4 py-2'>
            <div className='w-full h-20 sticky top-0 bg-white rounded-xl shadow-md'>
                <HorizontalCalander />
            </div>
            <div role='notesgrid' className='grid grid-cols-1 pt-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 2xl:grid-cols-5'>
                {
                    notesList?.map((note, index) => {
                        return (
                            <NotesItem
                                index={index % 5}
                                key={note.id}
                                notesProps={note}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NotesScreen